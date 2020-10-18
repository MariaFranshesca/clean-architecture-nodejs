import { HeaderKendalBotDto } from '../entities/dto/headerkendalbot.dto'
import { HistoryMessageDto } from '../entities/dto/historymessage.dto'
import { HistoryMessage } from '../entities/entity/historymessage.entity'
import { IHistoryMessage } from '../entities/interfaces/historymessage.interfaces'

export abstract class HistoryMessageRepository {
  abstract initHistoryMessage(historymessage: HistoryMessageDto): Promise<IHistoryMessage>
  abstract findBy(headerKendalBotDto: HeaderKendalBotDto): Promise<IHistoryMessage>
  abstract update(historymessage: IHistoryMessage): Promise<IHistoryMessage>
  abstract find(filters: HistoryMessage): Promise<IHistoryMessage[]>
}
