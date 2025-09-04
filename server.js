const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const contactRoutes = require('./routes/contact');
const jobApplicationRoutes = require('./routes/jobApplication'); 
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/contact', contactRoutes);
app.use('/api/jobApplication', jobApplicationRoutes);  
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
