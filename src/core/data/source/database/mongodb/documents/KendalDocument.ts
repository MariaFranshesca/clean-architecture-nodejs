import { Document, Types } from 'mongoose'

export interface KendalDocument extends Document {
  readonly _id: string
  readonly title: string
  readonly input: string
  readonly output: string
  readonly keywords: string[]
  readonly category: string
  readonly parentid: Types.ObjectId
}
