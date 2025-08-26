const express = require('express')
const router = express.Router();
const { connectToSqlServer, sql } = require('../config/db');
const { sendThankYouEmail } = require('../utils/emailsender');

router.post("/save", async (req, res) => {
    const { name, hospitalName, email, phone, message } = req.body;
    if (!name || !hospitalName || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const pool = await connectToSqlServer();
        await pool.request()
            .input('Name', sql.NVarChar, name)
            .input('HospitalName', sql.NVarChar, hospitalName)
            .input('Email', sql.NVarChar, email)
            .input('Phone', sql.NVarChar, phone)
            .input('Message', sql.NVarChar(sql.MAX), message)
            .query(`
              INSERT INTO ContactMessages (Name, HospitalName, Email, Phone, Message)
              VALUES (@Name, @HospitalName, @Email, @Phone, @Message)`)


       await sendThankYouEmail({ to: email, name, hospitalName, email, phone, message });
        await pool.close();

        res.status(201).json({ message: 'Contact form submitted and email sent successfully' });


    } catch (error) {
        console.error('Insert error:', error);
        res.status(500).json({ error: 'Internal server error' });

    }

})
module.exports = router;