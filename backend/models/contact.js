// server/models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    trim: true,
    default: 'Not specified',
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['new', 'read', 'responded'],
    default: 'new',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Contact', contactSchema);