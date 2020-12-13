import { Injectable } from '@nestjs/common'
import { ThreadMessage } from '../../domain/entities/ThreadMessage'
import { ThreadMessageRepository } from '../../domain/repository/ThreadMessageRepository'
import { ThreadMessageDataSource } from '../source/ThreadMessageDataSource'

@Injectable()
export class ThreadMessageRepositoryImpl implements ThreadMessageRepository {
  constructor(private threadMessageDataSource: ThreadMessageDataSource) {}

  async findAll(): Promise<ThreadMessage[]> {
    return await this.threadMessageDataSource.findAll()
  }

  async addThreadToHistoryMessage(threadMessage: ThreadMessage): Promise<ThreadMessage> {
    return await this.threadMessageDataSource.addThreadToHistoryMessage(threadMessage)
  }
  async find(filters: ThreadMessage): Promise<ThreadMessage[]> {
    return await this.find(filters)
  }
}
