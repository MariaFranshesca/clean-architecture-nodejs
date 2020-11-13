import { Injectable } from '@nestjs/common'
import { KendalBot } from 'src/core/domain/entities/KendalBot'
import { KendalBotRepository } from 'src/core/domain/repository/KendalBotRepository'
import { KendalBotDataSource } from '../source/KendalBotDataSource'

@Injectable()
export class KendalBotRepositoryImpl implements KendalBotRepository {
  constructor(private kendalBotDataSource: KendalBotDataSource) {}

  async chatBot(input: string): Promise<KendalBot> {
    return await this.kendalBotDataSource.chatBot(input)
  }
}
