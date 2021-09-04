const path = require('path');
// import sslRedirect from 'heroku-ssl-redirect';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
const rootDir = path.dirname(require.main.filename)

app.use(cors())

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
      if (req.headers.host === 'localhost:3000')
          return res.redirect(301, 'https://localhost:3000');
      if (req.headers['x-forwarded-proto'] !== 'https')
          return res.redirect('https://' + req.headers.host + req.url);
      else
          return next();
  } else
      return next();
});

app.use(express.static(path.join(rootDir, '../public')));

app.use('/test', (req, res) => {
  console.log(process.env.NODE_ENV)
  res.end(`test`);
});

app.use('*', (req, res) => {
  console.log(path.join(rootDir, '../public', 'index.html'))
  console.log(process.env.NODE_ENV)
  res.sendFile(path.join(rootDir, '../public', 'index.html'));
});


app.listen(port, () => {
  console.log('Server is up!');
});