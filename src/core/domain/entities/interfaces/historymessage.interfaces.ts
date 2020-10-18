import { Document } from 'mongoose'
import { IThreadMessage } from './threadmessage.interfaces'
import { IUser } from './user.interfaces'


export interface IHistoryMessage extends Document {
  readonly _id: any
  readonly date: Date
  readonly ip: string
  readonly device: string
  readonly user: IUser
  readonly aditionalInfo: string
  readonly threadMessages: IThreadMessage[]
}
