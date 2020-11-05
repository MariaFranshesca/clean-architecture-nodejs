import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { IThreadMessage } from 'src/core/domain/entities/interfaces/threadmessage.interfaces'
import { IHistoryMessage } from 'src/core/domain/entities/interfaces/historymessage.interfaces'
import { ThreadMessageDataSource } from '../../ThreadMessageDataSource'
import { ThreadMessage } from 'src/core/domain/entities/ThreadMessage'

export class ThreadMessageMongoDB implements ThreadMessageDataSource {
  constructor(
    @InjectModel('ThreadMessage')
    private readonly threadModel: Model<IThreadMessage>,
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<IHistoryMessage>
  ) {}

  create(threadMessage: ThreadMessage): Promise<ThreadMessage> {
    throw new Error('Method not implemented.')
  }
  deleteById(id: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
  update(threadMessage: ThreadMessage): Promise<string> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<ThreadMessage[]> {
    throw new Error('Method not implemented.')
  }

  async addThreadToHistoryMessage(threadMessage: ThreadMessage): Promise<ThreadMessage> {
    const history = await this.historyModel.findOne({ _id: threadMessage.historyMsgId })
    if (history) {
      const saveThreadMessage = new this.threadModel(threadMessage)
      return await saveThreadMessage.save()
    }
  }

  async find(filters: ThreadMessage): Promise<ThreadMessage[]> {
    return await this.threadModel
      .find(filters)
      .lean()
      .exec()
  }
}
