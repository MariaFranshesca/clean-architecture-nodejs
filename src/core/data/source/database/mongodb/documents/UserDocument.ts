import { Document, Types } from 'mongoose'

export interface UserDocument extends Document {
  readonly username: string
  readonly password: string
  readonly date: Date
}
