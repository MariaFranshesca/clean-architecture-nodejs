import { ThreadMessageDto } from '../../entities/dto/threadmessage.dto';
import { IThreadMessage } from '../../entities/interfaces/threadmessage.interfaces';
import { ThreadMessage } from '../../entities/entity/threadmessage.entity';

export abstract class ThreadMessageRepository {
  abstract addThreadToHistoryMessage(
    threadMessageDto: ThreadMessageDto,
  ): Promise<IThreadMessage>;
  abstract find(filters: ThreadMessage): Promise<IThreadMessage[]>;
}
