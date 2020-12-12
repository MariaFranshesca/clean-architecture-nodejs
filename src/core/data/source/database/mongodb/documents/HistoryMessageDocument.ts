import { Document, Types } from 'mongoose'

export interface HistoryMessageDocument extends Document {
  date: Date
  ip: string
  device: string
  user: Types.ObjectId
  aditionalInfo: string
  threadMessages: Types.ObjectId
}
