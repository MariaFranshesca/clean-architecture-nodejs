import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { ThreadMessageDataSource } from '../../ThreadMessageDataSource'
import { ThreadMessage } from 'src/core/domain/entities/ThreadMessage'
import { HistoryMessageDocument } from './documents/HistoryMessageDocument'
import { ThreadMessageDocument } from './documents/ThreadMessageDocument'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ThreadMessageMongoDB implements ThreadMessageDataSource {
  constructor(
    @InjectModel('ThreadMessage')
    private readonly threadModel: Model<ThreadMessageDocument>,
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<HistoryMessageDocument>
  ) {}

  async create(threadMessage: ThreadMessage): Promise<ThreadMessage> {
    const createThreadMessage = new this.threadModel(threadMessage)
    const threadMessageDocument: ThreadMessageDocument = await createThreadMessage.save()
    return this.mapDocumentToThreadMessage(threadMessageDocument)
  }
  async deleteById(id: string): Promise<string> {
    await this.threadModel.deleteOne({ _id: id })
    return 'Eliminado correctamente'
  }
  async update(threadMessage: ThreadMessage): Promise<string> {
    await this.threadModel.findByIdAndUpdate(threadMessage.id, threadMessage)
    return 'Editado correctamente'
  }
  async findAll(): Promise<ThreadMessage[]> {
    return await this.threadModel.find().exec()
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
  private mapDocumentToThreadMessage(item: ThreadMessageDocument) {
    const threadMessage = new ThreadMessage()
    threadMessage.id = item.id
    threadMessage.message = item.message
    threadMessage.username = item.username
    threadMessage.dateTimeSend = item.dateTimeSend
    threadMessage.historyMsgId = item.historyMsgId
    threadMessage.type = threadMessage.type
    return threadMessage
  }
}
