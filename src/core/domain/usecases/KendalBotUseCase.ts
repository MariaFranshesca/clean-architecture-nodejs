import { Injectable } from '@nestjs/common'
import { KendalBot } from '../entities/KendalBot'
import { KendalBotInput } from '../entities/KendalBotInput'
import { KendalBotRepository } from '../repository/KendalBotRepository'

@Injectable()
export class KendalBotUseCase {
  constructor(private readonly kendalBotRepository: KendalBotRepository) {}

  async chatBot(kendalBotInput: KendalBotInput): Promise<KendalBot> {
    return await this.kendalBotRepository.chatBot(kendalBotInput)
  }
}
