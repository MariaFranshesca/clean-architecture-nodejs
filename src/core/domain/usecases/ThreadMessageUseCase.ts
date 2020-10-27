import { Injectable } from '@nestjs/common'
import { ThreadMessageRepository } from '../repository/ThreadMessageRepository'
import { ThreadMessage } from '../entities/ThreadMessage'


@Injectable()
export class ThreadMessageUseCase {
  constructor(private threadMessageRepository: ThreadMessageRepository) {}

  async create(kendal: ThreadMessage): Promise<ThreadMessage> {
    return await this.threadMessageRepository.create(kendal)
  }
  async findAll(): Promise<ThreadMessage[]> {
    return await this.threadMessageRepository.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.threadMessageRepository.deleteById(id)
  }
  async update(kendal: ThreadMessage): Promise<string> {
    return await this.threadMessageRepository.update(kendal)
  }
}