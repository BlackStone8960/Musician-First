const path = require('path');
// import sslRedirect from 'heroku-ssl-redirect';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var sslRedirect = require("heroku-ssl-redirect").default;

// const ssl = require('./ssl')

const rootDir = path.dirname(require.main.filename)
app.use(sslRedirect())
// console.log(ssl)
// app.use(sslRedirect([
//   'other',
//   'development',
//   'production'
//   ]));

app.use(express.static(path.join(rootDir, '../public')));

app.use('/test', (req, res) => {
  res.end(`test`);
});

app.use('*', (req, res) => {
  console.log(path.join(rootDir, '../public', 'index.html'))
  res.sendFile(path.join(rootDir, '../public', 'index.html'));
});


app.listen(port, () => {
  console.log('Server is up!');
});