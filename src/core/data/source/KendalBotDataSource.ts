import { KendalBot } from '../../domain/entities/KendalBot'

export abstract class KendalBotDataSource {
  abstract chatBot(input: string): Promise<KendalBot>
}
