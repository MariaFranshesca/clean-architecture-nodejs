import { Injectable } from '@nestjs/common'
import { HistoryMessage } from '../../domain/entities/HistoryMessage'
import { KendalBotInput } from '../../domain/entities/KendalBotInput'
import { HistoryMessageRepository } from '../../domain/repository/HistoryMessageRepository'
import { HistoryMessageDataSource } from '../source/HistoryMessageDataSource'

@Injectable()
export class HistoryMessageRepositoryImpl implements HistoryMessageRepository {
  constructor(private historyMessageDataSource: HistoryMessageDataSource) {}

  async initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage> {
    return await this.historyMessageDataSource.initHistoryMessage(historymessage)
  }
  async findBy(kendalBotInput: KendalBotInput): Promise<HistoryMessage> {
    return await this.historyMessageDataSource.findBy(kendalBotInput)
  }
  async update(historymessage: HistoryMessage): Promise<HistoryMessage> {
    return await this.historyMessageDataSource.update(historymessage)
  }
  async find(filters: HistoryMessage): Promise<HistoryMessage[]> {
    return await this.historyMessageDataSource.find(filters)
  }
}
