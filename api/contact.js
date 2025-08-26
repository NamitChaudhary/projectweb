const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('../routes/contact');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

module.exports = (req, res) => {
  app(req, res);
};
