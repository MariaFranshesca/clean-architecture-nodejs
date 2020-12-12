import { Injectable } from '@nestjs/common'
import { HistoryMessage } from '../entities/HistoryMessage'
import { HistoryMessageRepository } from '../repository/HistoryMessageRepository'

@Injectable()
export class HistoryMessageUseCase {
  constructor(private readonly historymsgrepository: HistoryMessageRepository) {}

  async find(filters: HistoryMessage): Promise<HistoryMessage[]> {
    return await this.historymsgrepository.find(filters)
  }
}
