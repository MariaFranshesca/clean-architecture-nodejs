import { Injectable } from '@nestjs/common'
import { HeaderKendalBotDto } from 'src/core/domain/entities/dto/headerkendalbot.dto'
import { HistoryMessage } from 'src/core/domain/entities/HistoryMessage'
import { HistoryMessageRepository } from 'src/core/domain/repository/HistoryMessageRepository'
import { HistoryMessageDataSource } from '../source/HistoryMessageDataSource'

@Injectable()
export class HistoryMessageRepositoryImpl implements HistoryMessageRepository {
  constructor(private historyMessageDataSource: HistoryMessageDataSource) {}

  async initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage> {
    return await this.historyMessageDataSource.initHistoryMessage(historymessage)
  }
  async findBy(headerKendalBotDto: HeaderKendalBotDto): Promise<HistoryMessage> {
    return await this.historyMessageDataSource.findBy(headerKendalBotDto)
  }
  async update(historymessage: HistoryMessage): Promise<HistoryMessage> {
    return await this.historyMessageDataSource.update(historymessage)
  }
  async find(filters: HistoryMessage): Promise<HistoryMessage[]> {
    return await this.historyMessageDataSource.find(filters)
  }
}
