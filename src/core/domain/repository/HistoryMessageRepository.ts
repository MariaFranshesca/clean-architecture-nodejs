import { HeaderKendalBotDto } from '../entities/dto/headerkendalbot.dto'
import { HistoryMessage } from '../entities/historymessage'

export abstract class HistoryMessageRepository {
  abstract initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract findBy(headerKendalBotDto: HeaderKendalBotDto): Promise<HistoryMessage>
  abstract update(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract find(filters: HistoryMessage): Promise<HistoryMessage[]>
}
