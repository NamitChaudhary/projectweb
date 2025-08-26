const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const contactRoutes  = require('./routes/contact')
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/contact',contactRoutes)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})