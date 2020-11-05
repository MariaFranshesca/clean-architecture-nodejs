import { ThreadMessage } from 'src/core/domain/entities/ThreadMessage'
export abstract class ThreadMessageDataSource {
  abstract create(threadMessage: ThreadMessage): Promise<ThreadMessage>
  abstract deleteById(id: string): Promise<string>
  abstract update(threadMessage: ThreadMessage): Promise<string>
  abstract findAll(): Promise<ThreadMessage[]>

  //Lo que se necesita para el botsito
  abstract addThreadToHistoryMessage(threadMessage: ThreadMessage): Promise<ThreadMessage>
  abstract find(filters: ThreadMessage): Promise<ThreadMessage[]>
}
