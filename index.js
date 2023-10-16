const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/connect', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/privacy-policy.html'));
});

app.get('/terms-of-service', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/terms-of-service.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});