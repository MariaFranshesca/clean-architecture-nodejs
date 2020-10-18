import { Injectable } from '@nestjs/common'
import { ThreadMessage } from '../entities/entity/threadmessage.entity'
import { IThreadMessage } from '../entities/interfaces/threadmessage.interfaces'
import { ThreadMessageRepository } from '../repository/threadmessage.reposiitory'

@Injectable()
export class ThreadMessageUseCase {
  constructor(private readonly threadmsgrepository: ThreadMessageRepository) {}

  async find(filters: ThreadMessage): Promise<IThreadMessage[]> {
    return await this.threadmsgrepository.find(filters)
  }
}
