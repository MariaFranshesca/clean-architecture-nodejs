import { ThreadMessage } from '../entities/ThreadMessage'

export abstract class ThreadMessageRepository {
  abstract addThreadToHistoryMessage(threadMessage: ThreadMessage): Promise<ThreadMessage>
  abstract find(filters: ThreadMessage): Promise<ThreadMessage[]>
  abstract findAll(): Promise<ThreadMessage[]>
}
