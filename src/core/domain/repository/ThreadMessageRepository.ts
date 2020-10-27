import { ThreadMessage } from "../entities/ThreadMessage";

export abstract class ThreadMessageRepository{
    abstract create(threadMessage: ThreadMessage): Promise<ThreadMessage>
    abstract deleteById(id: string): Promise<string>
    abstract update(threadMessage: ThreadMessage): Promise<string>
    abstract findAll(): Promise<ThreadMessage[]>
}