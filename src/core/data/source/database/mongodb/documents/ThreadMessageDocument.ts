import { Document, Types } from 'mongoose'

export interface ThreadMessageDocument extends Document {
  readonly message: string
  readonly username: string
  readonly dateTimeSend: Date
  readonly historyMsgId: string
  readonly type: string
}
