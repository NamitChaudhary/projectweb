const express = require('express');
const router = express.Router();
const JobApplication = require('../models/JobApplication');
const upload = require('../utils/upload');
const path = require('path');
const sendJobApplicationEmail = require('../utils/jobApplicationEmail');
const allowedPositions = [
  'Clinical Expert',
  'Design',
  'Software Developer',
  'Account Manager'
];

router.post('/apply', upload.single('resume'), async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    position,
    currentPackage,
    totalExperience,
    coverLetter,
    noticePeriod
  } = req.body;


  if (!firstName || !lastName || !phoneNumber || !email || !position || !currentPackage || !totalExperience || !coverLetter || !noticePeriod) {
    return res.status(400).json({ error: 'All fields are required' });
  }


  if (!allowedPositions.includes(position)) {
    return res.status(400).json({ error: 'Invalid position selected' });
  }


  const packageNumber = Number(currentPackage);
  const experienceNumber = Number(totalExperience);
  const noticeNumber = Number(noticePeriod);

  if (isNaN(packageNumber) || isNaN(experienceNumber) || isNaN(noticeNumber)) {
    return res.status(400).json({ error: 'Numeric fields must be valid numbers' });
  }

  try {
    const newApplication = new JobApplication({
      firstName,
      lastName,
      phoneNumber,
      email,
      position,
      currentPackage: packageNumber,
      totalExperience: experienceNumber,
      coverLetter,
      noticePeriod: noticeNumber,
      resume: req.file ? req.file.filename : null
    });

    await newApplication.save();

    
    const resumePath = req.file ? path.join(__dirname, '..', 'uploads', req.file.filename) : null;
    await sendJobApplicationEmail(req.body, resumePath);

    res.status(201).json({ message: 'Application submitted successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
