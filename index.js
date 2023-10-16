const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000

app.use('/static', express.static('public'))

app.get('/connect', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});

app.get('/terms-of-service', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms-of-service.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});