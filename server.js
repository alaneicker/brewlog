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

app.use(bodyParser.urlencoded({ extended: false, limit: 1000000000000 }));
app.use(bodyParser.json({ limit: 1000000000000 })); 
app.use(cors());

app.route('/api/beers').get((req, res) => {
    query({ query: `SELECT * FROM mybeers` })
        .then(data => res.send(data))
        .catch(error => console.log(error));
});

app.route('/api/beer/image/:imgId').get((req, res) => {
    fs.readFile(`./uploads/user-image-${req.params.imgId}.txt`, 'utf8', (err, content) => {
        if (err) {
            throw err;
        }
        
        const data = String(content);

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
               
                res.send(data);
            });
        })
        .catch(error => console.log(error));
});

app.route('/api/beer/add').post((req, res) => {

    const randomId = Math.round(Math.random() * 100000);

    fs.writeFile(`./uploads/user-image-${randomId}.txt`, req.body.upload, (err) => {
        console.log('file written');
    });

    query({ 
        query: `
            INSERT INTO mybeers 
            SET beerName = ?, rating = ?, comments = ?, imgId = ?
        `,
        data: [
            req.body.beerName,
            req.body.rating,
            req.body.comments,
            randomId
        ]
    })
    .then(data => res.send(data))
    .catch(error => console.log(error));
});

module.exports = app.listen(port, () => {
    console.log(`Node server is running in ${env} mode on port ${port}`);
});