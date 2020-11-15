import { HistoryMessage } from '../entities/historymessage'
import { KendalBotInput } from '../entities/KendalBotInput'

export abstract class HistoryMessageRepository {
  abstract initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract findBy(kendalBotInput: KendalBotInput): Promise<HistoryMessage>
  abstract update(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract find(filters: HistoryMessage): Promise<HistoryMessage[]>
}
