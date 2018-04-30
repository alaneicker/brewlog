const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';

winston.add(winston.transports.File, {
    filename: 'winston.log',
    json: false
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.route('/api/beer/:id').get((req, res) => {
    res.send({
        "photoUrl": "assets/images/goose-island-green-line.jpg",
        "beerName": "Green Line Pale Ale",
        "brewery": "Goose Island Brewing Co.",
        "location": "Chicago, IL",
        "style": "American Pale Ale",
        "abv": "5.4",
        "ibu": "30",
        "glassware": "Mug, Pint Glass",
        "comments": "This was a complete disappointment. Not hoppy. Not tasty. Super flat and no head at all. Tastes like a flat Budweiser. Someone before said that it was abusive to the consumer and I completely agree. This is down right one of the worst beers I\'ve ever tasted.",
        "rating": 3
    });
});

app.get('/recommended-beers', (req, res) => {
    const beerStyle = req.body.beerStyle;
    
    res.send([
        {
          "photoUrl": "assets/images/honkers-ale.jpg",
          "beerName": "Honkers Ale",
          "brewery": "Goose Island Brewing Co."
        },
        {
          "photoUrl": "assets/images/daisy-cutter.jpg",
          "beerName": "Daisy Cutter",
          "brewery": "Half Acre Beer Co."
        },
        {
          "photoUrl": "assets/images/sky-high-rye.jpg",
          "beerName": "Sky High Rye",
          "brewery": "Arcadia Brewing Co."
        },
        {
          "photoUrl": "assets/images/sierra-nevada-paleale.jpg",
          "beerName": "Sierra Nevada Pale Ale",
          "brewery": "Sierra Nevada Brewing Co."
        }
    ]);
});

module.exports = app.listen(port, () => {
    console.log(`Node server is running in ${env} mode on port ${port}`);
});