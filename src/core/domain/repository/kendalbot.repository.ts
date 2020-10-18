import { KendalBotResponse } from '../entities/entity/kendalbot.entity'
import { KendalBotDto } from '../entities/dto/kendalbot.dto'

export abstract class KendalBotRepository {
  abstract chatBot(kendalBotDto: KendalBotDto): Promise<KendalBotResponse>
}
