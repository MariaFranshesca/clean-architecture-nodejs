import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { HistoryMessage } from '../../../../domain/entities/historymessage'
import { HistoryMessageDataSource } from '../../HistoryMessageDataSource'
import { HistoryMessageDocument } from './documents/HistoryMessageDocument'
import { KendalBotInput } from '../../../../domain/entities/KendalBotInput'
import { Injectable } from '@nestjs/common'

@Injectable()
export class HistoryMessageMongoDB implements HistoryMessageDataSource {
  constructor(
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<HistoryMessageDocument>
  ) {}

  async initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage> {
    const saveHistoryMessage = new this.historyModel(historymessage)
    const historyMessageDocument: HistoryMessageDocument = await saveHistoryMessage.save()
    return this.mapDocumentToHistoryMessage(historyMessageDocument)
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
  
  private mapDocumentToHistoryMessage(item: HistoryMessageDocument) {
    const historyMessage = new HistoryMessage(item.ip, item.device, item.aditionalInfo, item.user)
    historyMessage.date = item.date
    historyMessage.user = item.user 
    historyMessage.threadMessages = item.threadMessages
    return historyMessage
  }
}
