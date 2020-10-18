import { Document, Types } from 'mongoose'

export interface IThreadMessage extends Document {
  readonly _id: any
  readonly message: string
  readonly username: string
  readonly dateTimeSend: string
  readonly type: string
  readonly historyMsgId: Types.ObjectId
}
