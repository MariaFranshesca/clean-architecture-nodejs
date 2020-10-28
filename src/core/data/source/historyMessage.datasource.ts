import { HeaderKendalBotDto } from 'src/core/domain/entities/dto/headerkendalbot.dto';
import { HistoryMessage } from 'src/core/domain/entities/HistoryMessage'
export abstract class historyMessageDataSource {
  abstract initHistoryMessage(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract findBy(headerKendalBotDto: HeaderKendalBotDto): Promise<HistoryMessage>
  abstract update(historymessage: HistoryMessage): Promise<HistoryMessage>
  abstract find(filters: HistoryMessage): Promise<HistoryMessage[]>
}
