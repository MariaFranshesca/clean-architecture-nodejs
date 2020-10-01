import { Model } from 'mongoose';
import { HistoryMessageRepository } from '../../usecases/repository/historymessage.repository';
import { HistoryMessageDto } from '../../entities/dto/historymessage.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IHistoryMessage } from '../../entities/interfaces/historymessage.interfaces';
import { HeaderKendalBotDto } from '../../entities/dto/headerkendalbot.dto';

export class HistoryMessageMongoDB implements HistoryMessageRepository {
  constructor(
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<IHistoryMessage>,
  ) {}

  async initHistoryMessage(
    historymessage: HistoryMessageDto,
  ): Promise<IHistoryMessage> {
    const saveHistoryMessage = new this.historyModel(historymessage);
    return await saveHistoryMessage.save();
  }
  async findBy(headerKendalBot: HeaderKendalBotDto): Promise<IHistoryMessage> {
    return await this.historyModel
      .findOne({ ip: headerKendalBot.ip, device: headerKendalBot.device })
      .populate('user')
      .lean();
  }
  async update(historymessage: IHistoryMessage): Promise<IHistoryMessage> {
    return await this.historyModel.updateOne(historymessage);
  }

  async find(filters: any): Promise<IHistoryMessage[]> {
    return await this.historyModel
      .find(filters)
      .populate('threadMessages')
      .lean();
  }
}
