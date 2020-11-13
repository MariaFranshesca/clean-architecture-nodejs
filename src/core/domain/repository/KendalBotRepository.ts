import { KendalBot } from '../entities/KendalBot'

export abstract class KendalBotRepository {
  abstract chatBot(input: string): Promise<KendalBot>
}
