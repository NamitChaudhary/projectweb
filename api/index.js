const express = require('express');
const serverless = require('serverless-http'); // Vercel compatible
const cors = require('cors');

const contactRoutes = require('../routes/contact'); // yeh aapke backend ke route hain

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

module.exports = serverless(app);
