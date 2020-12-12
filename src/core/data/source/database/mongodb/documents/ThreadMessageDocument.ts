import { Document, Types } from 'mongoose'

export interface ThreadMessageDocument extends Document {
  readonly id: string
  readonly message: string
  readonly username: string
  readonly dateTimeSend: Date
  readonly historyMsgId: string
  readonly type: string
}
