import { HistoryMessage } from 'src/core/domain/entities/HistoryMessage'
import { KendalBotInput } from 'src/core/domain/entities/KendalBotInput'
export abstract class HistoryMessageDataSource {
  abstract initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract findBy(kendalInput: KendalBotInput): Promise<HistoryMessage>
  abstract update(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract find(filters: HistoryMessage): Promise<HistoryMessage[]>
}
