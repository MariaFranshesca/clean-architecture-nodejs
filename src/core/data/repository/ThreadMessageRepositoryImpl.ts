import { Injectable } from '@nestjs/common'
import { ThreadMessage } from 'src/core/domain/entities/ThreadMessage'
import { ThreadMessageRepository } from 'src/core/domain/repository/ThreadMessageRepository'
import { ThreadMessageDataSource } from '../source/ThreadMessageDataSource'

@Injectable()
export class ThreadMessageRepositoryImpl implements ThreadMessageRepository {
  constructor(private threadMessageDataSource: ThreadMessageDataSource) {}

  async create(threadMessage: ThreadMessage): Promise<ThreadMessage> {
    return await this.threadMessageDataSource.create(threadMessage)
  }
  async findAll(): Promise<ThreadMessage[]> {
    return await this.threadMessageDataSource.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.threadMessageDataSource.deleteById(id)
  }
  async update(threadMessage: ThreadMessage): Promise<string> {
    return await this.threadMessageDataSource.update(threadMessage)
  }
}