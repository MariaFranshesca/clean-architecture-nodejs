import * as mongoose from 'mongoose'

export const ThreadMessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  username: { type: String, required: true },
  dateTimeSend: { type: Date, default: Date.now() },
  type: { type: String, required: true },
  historyMsgId: {
    type: mongoose.Schema.Types.ObjectId,
  },
})
