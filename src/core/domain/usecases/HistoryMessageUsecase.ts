import { Injectable } from '@nestjs/common'
import { HistoryMessageRepository } from '../repository/HistoryMessageRepository'
import { HistoryMessage } from '../entities/entity/historymessage.entity'
import { IHistoryMessage } from '../entities/interfaces/historymessage.interfaces'

@Injectable()
export class HistoryMessageUseCase {
  constructor(private readonly historymsgrepository: HistoryMessageRepository) {}

  async find(filters: HistoryMessage): Promise<HistoryMessage[]> {
    return await this.historymsgrepository.find(filters)
  }
}
