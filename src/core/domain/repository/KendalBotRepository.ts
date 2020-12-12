import { KendalBot } from '../entities/KendalBot'
import { KendalBotInput } from '../entities/KendalBotInput'

export abstract class KendalBotRepository {
  abstract chatBot(input: KendalBotInput): Promise<KendalBot>
}
