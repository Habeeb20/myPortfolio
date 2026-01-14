// server/routes/contact.js
import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/contact.js'; // ← new import
import dotenv from "dotenv"

dotenv.config()
const router = express.Router();

// Nodemailer setup (same as before)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/', async (req, res) => {
  const { fullName, phone, email, projectDescription, budget } = req.body;

  // Basic validation
  if (!fullName || !phone || !email || !projectDescription) {
    return res.status(400).json({ 
      success: false,
      message: 'Please fill all required fields' 
    });
  }

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({
      fullName,
      phone,
      email,
      projectDescription,
      budget: budget || 'Not specified',
    });

    await newContact.save();

    // 2. Send email notification
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'Ademolawaliyu1@gmail.com',
      subject: `New Project Inquiry from ${fullName}`,
      html: `
        <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <hr style="border-color: #e5e7eb;" />
        <h3>Project Description:</h3>
        <p style="white-space: pre-wrap;">${projectDescription.replace(/\n/g, '<br>')}</p>
        <p style="color:#6b7280; font-size:0.9em; margin-top:2rem;">
          Submitted: ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
          <br>ID: ${newContact._id}
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Success response
    res.status(200).json({ 
      success: true,
      message: 'Message sent and saved successfully! I will get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact error:', error);

    // Decide which error to show (don't expose database details)
    const isDbError = error.name === 'MongoServerError' || error.name === 'ValidationError';
    
    res.status(500).json({ 
      success: false,
      message: isDbError 
        ? 'Failed to save message. Please try again later.'
        : 'Failed to send email. Please try again or contact me directly.'
    });
  }
});

export default router;