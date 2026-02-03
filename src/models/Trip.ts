
import mongoose, { Schema, model, models } from 'mongoose';

const TripSchema = new Schema({
  destination: {
    type: String,
    required: [true, 'Please provide a destination.'],
    maxlength: [60, 'Destination cannot be more than 60 characters'],
  },
  travelerEmail: {
    type: String,
    required: [true, 'Please provide the traveler email address'],
  },
  dates: {
    type: String,
    required: [true, 'Please provide travel dates'],
  },
  status: {
    type: String,
    enum: ['planned', 'completed', 'cancelled'],
    default: 'planned',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Trip || model('Trip', TripSchema);
