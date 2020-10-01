import { Model } from 'mongoose';
import { ThreadMessageRepository } from '../../usecases/repository/threadmessage.reposiitory';
import { ThreadMessageDto } from '../../entities/dto/threadmessage.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IThreadMessage } from '../../entities/interfaces/threadmessage.interfaces';
import { IHistoryMessage } from '../../entities/interfaces/historymessage.interfaces';
import { ThreadMessage } from '../../entities/entity/threadmessage.entity';

export class ThreadMessageMongoDB implements ThreadMessageRepository {
  constructor(
    @InjectModel('ThreadMessage')
    private readonly threadModel: Model<IThreadMessage>,
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<IHistoryMessage>,
  ) {}

  async addThreadToHistoryMessage(
    threadMessageDto: ThreadMessageDto,
  ): Promise<IThreadMessage> {
    const history = this.historyModel.findOne({
      _id: threadMessageDto.historyMsgId,
    });
    if (history) {
      const saveThreadMessage = new this.threadModel(threadMessageDto);
      return await saveThreadMessage.save();
    }
  }

  async find(filters: ThreadMessage): Promise<IThreadMessage[]> {
    return await this.threadModel
      .find(filters)
      .lean()
      .exec();
  }
}
