import { Injectable } from '@nestjs/common';
import { ThreadMessageRepository } from '../repository/threadmessage.reposiitory';
import { IThreadMessage } from '../../entities/interfaces/threadmessage.interfaces';
import { ThreadMessage } from '../../entities/entity/threadmessage.entity';

@Injectable()
export class ThreadMessageUseCase {
  constructor(private readonly threadmsgrepository: ThreadMessageRepository) {}

  async find(filters: ThreadMessage): Promise<IThreadMessage[]> {
    return await this.threadmsgrepository.find(filters);
  }
}
