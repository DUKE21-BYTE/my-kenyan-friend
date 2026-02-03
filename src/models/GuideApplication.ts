import mongoose, { Schema, model, models } from 'mongoose';

const GuideApplicationSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
  },
  whatsapp: {
    type: String,
    required: [true, 'Please provide your WhatsApp number'],
  },
  county: {
    type: String,
    required: [true, 'Please select your county'],
  },
  experience: {
    type: String,
    required: [true, 'Please describe your experience'],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.GuideApplication || model('GuideApplication', GuideApplicationSchema);
