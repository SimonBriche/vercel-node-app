const https = require('https');
const express = require('express');
require('dotenv').config({silent: true});

const app = express();

/*
app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));
*/

app.get('*', (req, res) => {
  const proxyURL = `https://${process.env.DOMAIN}${req.originalUrl}`;
  const proxy = https.request(proxyURL, {
    headers: {
      'user-agent' : req.headers['user-agent']
    }
  }, function (r) {
    res.writeHead(r.statusCode, r.headers);
    r.pipe(res, {end: true});
  });
  req.pipe(proxy, {end: true});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));