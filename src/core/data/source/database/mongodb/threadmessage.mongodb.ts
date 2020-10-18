import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { ThreadMessageRepository } from 'src/core/domain/repository/threadmessage.reposiitory'
import { IThreadMessage } from 'src/core/domain/entities/interfaces/threadmessage.interfaces'
import { ThreadMessageDto } from 'src/core/domain/entities/dto/threadmessage.dto'
import { IHistoryMessage } from 'src/core/domain/entities/interfaces/historymessage.interfaces'
import { ThreadMessage } from 'src/core/domain/entities/entity/threadmessage.entity'

export class ThreadMessageMongoDB implements ThreadMessageRepository {
  constructor(
    @InjectModel('ThreadMessage')
    private readonly threadModel: Model<IThreadMessage>,
    @InjectModel('HistoryMessage')
    private readonly historyModel: Model<IHistoryMessage>
  ) {}

  async addThreadToHistoryMessage(threadMessageDto: ThreadMessageDto): Promise<IThreadMessage> {
    const history = this.historyModel.findOne({
      _id: threadMessageDto.historyMsgId,
    })
    if (history) {
      const saveThreadMessage = new this.threadModel(threadMessageDto)
      return await saveThreadMessage.save()
    }
  }

  async find(filters: ThreadMessage): Promise<IThreadMessage[]> {
    return await this.threadModel
      .find(filters)
      .lean()
      .exec()
  }
}
