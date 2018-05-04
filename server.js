const express = require('express');
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cors());

app.route('/api/get-beers-by-style/:styleIds').get((req, res) => {
    const response = res;
    const styleIds = req.params.styleIds.split(',');
    const queries = [];

    styleIds.forEach(id => {
        queries.push(`(
            SELECT * 
            FROM beers 
            WHERE styleId = ${id} 
            ORDER BY RAND() 
            LIMIT 1
        )`)
    });

    const combinedQueries = queries.join('UNION ALL');

    query({ query: combinedQueries }).then(data => {
        response.send(data);
    });
});

app.route('/api/beers').get((req, res) => {
    query({ query: `SELECT * FROM mybeers` })
        .then(data => res.send(data))
        .catch(error => console.log(error));
});

app.route('/api/beer/:id').get((req, res) => {
    query({ query: `SELECT * FROM mybeers WHERE id = ${req.params.id}`, isArray: false })
        .then(data => res.send(data))
        .catch(error => console.log(error));
});

module.exports = app.listen(port, () => {
    console.log(`Node server is running in ${env} mode on port ${port}`);
});