import { Document, Types } from 'mongoose'

export interface UserDocument extends Document {
  readonly id: string
  readonly username: string
  readonly password: string
  readonly date: Date
}
