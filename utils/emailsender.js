const nodemailer = require('nodemailer');

const sendThankYouEmail = async ({ to, name, hospitalName, email, phone, message }) => {


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });



    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: 'Thank you for contacting us',
        text: `
Dear ${name},

Thank you for reaching out to us. We have received your message and here are the details you submitted:

Hospital Name: ${hospitalName}
Email: ${email}
Phone: ${phone}
Message: ${message}

We will get back to you shortly.

Regards,
Akhil Systems Pvt Ltd.
        `,
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Contact Email sent:', result);
        return result;
    } catch (error) {
        console.error('Contact Email failed:', error);
        throw error;
    }
};

module.exports = sendThankYouEmail;
