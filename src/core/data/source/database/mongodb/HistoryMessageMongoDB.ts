import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { HistoryMessage } from 'src/core/domain/entities/historymessage'
import { HistoryMessageDataSource } from '../../HistoryMessageDataSource'
import { HistoryMessageDocument } from './documents/HistoryMessageDocument'
import { KendalBotInput } from 'src/core/domain/entities/KendalBotInput'

export class HistoryMessageMongoDB implements HistoryMessageDataSource {
  constructor(
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<HistoryMessageDocument>
  ) {}

  async initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage> {
    const saveHistoryMessage = new this.historyModel(historymessage)
    return await saveHistoryMessage.save()
  }
  async findBy(kendalInput: KendalBotInput): Promise<HistoryMessage> {
    return await this.historyModel
      .findOne({ ip: kendalInput.ip, device: kendalInput.device })
      .populate('users')
      .lean()
  }
  async update(historymessage: HistoryMessage): Promise<HistoryMessage> {
    return await this.historyModel.updateOne(historymessage)
  }

  async find(filters: any): Promise<HistoryMessage[]> {
    return await this.historyModel
      .find(filters)
      .populate('threadMessages')
      .lean()
  }
}
