const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); 
const sendThankYouEmail = require('../utils/emailsender');


router.post("/save", async (req, res) => {
    const { name, hospitalName, email, phone, message } = req.body;

   
    if (!name || !hospitalName || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        
        const newContact = new Contact({
            name,
            hospitalName,
            email,
            phone,
            message
        });

        await newContact.save();

    
        await sendThankYouEmail({ to: email, name, hospitalName, email, phone, message });

        res.status(201).json({ message: 'Contact form submitted and email sent successfully' });

    } catch (error) {
        console.error('Insert error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
