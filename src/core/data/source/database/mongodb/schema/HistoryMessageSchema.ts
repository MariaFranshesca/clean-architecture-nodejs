import * as mongoose from 'mongoose'

export const HistoryMessageSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  ip: {
    type: String,
  },
  device: {
    type: String,
  },
  user: { type: mongoose.Schema.ObjectId, ref: 'users' },
  aditionalInfo: { type: String },
  threadMessages: [{ type: mongoose.Schema.ObjectId, ref: 'threadMessages' }],
})
