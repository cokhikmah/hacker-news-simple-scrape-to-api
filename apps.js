const express = require('express');
const app = express()
const request = require('request')
const cheerio = require('cheerio');
const path = require('path');
const port = 3000

const scrape = require('./scraping.js')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/api', (req, res) => {
  scrape.doScrape().then((result) => {
    res.json(result);
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
