const path = require('path');
const nodemailer = require('nodemailer');

const sendJobApplicationEmail = async (formData, resumeFilePath) => {


     const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

    const {
        firstName, lastName, phoneNumber, email,
        position, currentPackage, totalExperience,
        coverLetter, noticePeriod
    } = formData;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `New Job Application from ${firstName} ${lastName}`,
        text: `
New Job Application Received:

Full Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Position: ${position}
Current Package: ${currentPackage}
Total Experience: ${totalExperience}
Notice Period: ${noticePeriod}
Cover Letter: ${coverLetter}
        `,
        attachments: resumeFilePath ? [{
            filename: path.basename(resumeFilePath),
            path: resumeFilePath
        }] : [],
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Job Application Email sent:', result);
        return result;
    } catch (error) {
        console.error('Job Application Email failed:', error);
        throw error;
    }
};

module.exports = sendJobApplicationEmail;
