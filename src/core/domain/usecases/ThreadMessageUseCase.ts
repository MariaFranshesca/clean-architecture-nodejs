import { Injectable } from '@nestjs/common'
import { ThreadMessageRepository } from '../repository/ThreadMessageRepository'
import { ThreadMessage } from '../entities/ThreadMessage'

@Injectable()
export class ThreadMessageUseCase {
  constructor(private threadMessageRepository: ThreadMessageRepository) {}

  async addThreadToHistoryMessage(threadMessage: ThreadMessage): Promise<ThreadMessage> {
    return await this.threadMessageRepository.addThreadToHistoryMessage(threadMessage)
  }
  async find(filters: ThreadMessage): Promise<ThreadMessage[]> {
    return await this.threadMessageRepository.find(filters)
  }
  async findAll(): Promise<ThreadMessage[]> {
    return await this.threadMessageRepository.findAll()
  }
}
