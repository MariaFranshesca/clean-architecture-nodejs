import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { HeaderKendalBotDto } from 'src/core/domain/entities/dto/headerkendalbot.dto'
import { HistoryMessage } from 'src/core/domain/entities/historymessage'
import { HistoryMessageDataSource } from '../../HistoryMessageDataSource'

export class HistoryMessageMongoDB implements HistoryMessageDataSource {
  constructor(
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<HistoryMessage>
  ) {}

  async initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage> {
    const saveHistoryMessage = new this.historyModel(historymessage)
    return await saveHistoryMessage.save()
  }
  async findBy(headerKendalBot: HeaderKendalBotDto): Promise<HistoryMessage> {
    return await this.historyModel
      .findOne({ ip: headerKendalBot.ip, device: headerKendalBot.device })
      .populate('user')
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
