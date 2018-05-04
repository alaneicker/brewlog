const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const request = require('request-promise'); 
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

app.use(bodyParser.urlencoded({ extended: false, limit: 1000000000 }));
app.use(bodyParser.json({ limit: 1000000000 })); 
app.use(cors());

app.route('/api/get-beers-by-style/:styleIds').get((req, res) => {
    const response = res;
    const styleIds = req.params.styleIds.split(',').splice(0, 4);
    const urls = [];

    styleIds.forEach(id => {
        urls.push(`https://api.brewerydb.com/v2/beer/random?key=df7e3d9ef514039778837e71f2ddace3&styleId=60&hasLabels=Y&withBreweries=Y&styleId=${id}`);
    });

    const promises = urls.map(url => request(url));
    Promise.all(promises).then((data) => {
        response.send(data);
    });
});

app.route('/api/beer/:id').get((req, res) => {
    query({ query: `SELECT * FROM mybeers WHERE id = ${req.params.id}`, isArray: false })
        .then(data => res.send(data))
        .catch(error => console.log(error));
});

app.get('/recommended-beers', (req, res) => {
    const beerStyle = req.body.beerStyle;
    
    res.send([
        {
          "photoUrl": "assets/images/honkers-ale.jpg",
          "beerName": "Honkers Ale",
          "brewery": "Goose Island Brewing Co.",
          "url": "https://www.ratebeer.com/beer/goose-island-honkers-ale/811/"
        },
        {
          "photoUrl": "assets/images/daisy-cutter.jpg",
          "beerName": "Daisy Cutter",
          "brewery": "Half Acre Beer Co.",
          "url": "https://www.ratebeer.com/beer/half-acre-daisy-cutter/102472/"
        },
        {
          "photoUrl": "assets/images/sky-high-rye.jpg",
          "beerName": "Sky High Rye",
          "brewery": "Arcadia Brewing Co.",
          "url": "https://www.ratebeer.com/beer/arcadia-sky-high-rye/90983/"
        },
        {
          "photoUrl": "assets/images/sierra-nevada-paleale.jpg",
          "beerName": "Sierra Nevada Pale Ale",
          "brewery": "Sierra Nevada Brewing Co.",
          "url": "https://www.ratebeer.com/beer/sierra-nevada-pale-ale-bottle-can/365/"
        }
    ]);
});

module.exports = app.listen(port, () => {
    console.log(`Node server is running in ${env} mode on port ${port}`);
});