import { Document, Types } from 'mongoose'

export interface HistoryMessageDocument extends Document {
  date: Date
  ip: String
  device: String
  user: Types.ObjectId
  aditionalInfo: String
  threadMessages: Types.ObjectId
}
