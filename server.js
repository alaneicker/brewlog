const express = require('express');
const fs = require('file-system');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'dev';
const dbConfig = require('./db-config')[env];

const pool = mysql.createPool(dbConfig);
pool.config.connectionLimit = 400;

const query = options => {
    const {
      query,
      data,
      isArray,
    } = options;

    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
            console.log('DATABASE ERROR: ', err);
            connection.release();
            reject(err);
        }
        connection.query(query, data, (err, result) => {
            connection.release();
            if (err) {
                reject(err);
            } else {
                resolve(isArray === false ? result[0] : result);
            }
        });
      });
    });
};

const setCache = res => {
    if (env === 'production') {
        const cacheExpire = ((1000 * 60) * 60) * 24;
        res.setHeader('Cache-Control', `public, max-age=${ cacheExpire }`);
    }
}

app.use(bodyParser.urlencoded({ extended: false, limit: 1000000000000 }));
app.use(bodyParser.json({ limit: 1000000000000 })); 
app.use(cors());

app.use('/', express.static(`${__dirname}/dist`));
app.set('view engine', 'html');
app.set('views', `${__dirname}/dist`);

app.route('/api/beers').get((req, res) => {
    query({ query: `SELECT * FROM mybeers` })
        .then(data => {
            setCache(res);
            res.send(data)
        })
        .catch(error => console.log(error));
});

app.route('/api/beer/image/:imgId').get((req, res) => {
    fs.readFile(`./uploads/user-image-${req.params.imgId}.txt`, 'utf8', (err, content) => {
        if (err) {
            throw err;
        }
        
        const data = String(content);

        setCache(res);
        res.send(data);
    });
});

app.route('/api/beer/:imgId/:id').get((req, res) => {
    query({ query: `SELECT * FROM mybeers WHERE id = ${req.params.id}`, isArray: false })
        .then(data => {

            fs.readFile(`./uploads/user-image-${data.imgId}.txt`, 'utf8', (err, content) => {
                if (err) {
                    throw err;
                }

                data.imgDataUri = String(content);
               
                setCache(res);
                res.send(data);
            });
        })
        .catch(error => console.log(error));
});

app.route('/api/beer/add').post((req, res) => {
    const randomId = Math.round(Math.random() * 100000000);

    fs.writeFile(`./uploads/user-image-${randomId}.txt`, req.body.upload, err => {
        console.log(`./uploads/user-image-${randomId}.txt has been created.`);
    });

    query({ 
        query: `
            INSERT INTO mybeers 
            SET beerName = ?, rating = ?, comments = ?, imgId = ?, datePosted = ?
        `,
        data: [
            req.body.beerName,
            req.body.rating,
            req.body.comments,
            randomId,
            new Date().toLocaleString("en-US")
        ]
    })
    .then(data => { 
        data.imgId = randomId;
        res.send(data)
    })
    .catch(error => console.log(error));
});

app.route('/api/beer/edit/:imgId/:id').put((req, res) => {
    query({ 
        query: `
            UPDATE mybeers
            SET beerName = ?, rating = ?, comments = ?
            WHERE id = ${req.params.id}
        `,
        data: [
            req.body.beerName,
            req.body.rating,
            req.body.comments
        ]
    })
    .then(data => {

        data.body = req.body;

        if (req.body.upload !== '') {
            fs.writeFile(`./uploads/user-image-${req.params.imgId}.txt`, req.body.upload, err => {
                console.log(`user-image-${req.params.imgId}.txt has been updated.`);
                res.send(data);
            });
        } else {
            res.send(data);
        }
    })
    .catch(error => console.log(error));
});

app.route('/api/beer/delete/:imgId/:id').delete((req, res) => {
    query({ query: `DELETE FROM mybeers WHERE id = ${req.params.id}` })
        .then(data => {
            fs.unlink(`./uploads/user-image-${req.params.imgId}.txt`, err => {
                res.send(data);
            });
        })
        .catch(error => console.log(error));
});

module.exports = app.listen(port, () => {
    console.log(`Node server is running in ${env} mode on port ${port}`);
});