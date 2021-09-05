const path = require('path');
// import sslRedirect from 'heroku-ssl-redirect'; //
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// app.use(sslRedirect()); // Redirect users to secured URL when they try to access via non-secured URL
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});