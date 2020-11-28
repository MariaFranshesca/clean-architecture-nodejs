import { Controller, Post, Body } from '@nestjs/common'
import { HistoryMessage } from 'src/core/domain/entities/HistoryMessage'
import { HistoryMessageUseCase } from 'src/core/domain/usecases/historymessageUsecase'

@Controller('historymessage')
export class HistoryMessageController {
  constructor(private readonly historymsgUseCase: HistoryMessageUseCase) {}
  @Post()
  async find(@Body() filters: HistoryMessage): Promise<HistoryMessage[]> {
    return await this.historymsgUseCase.find(filters)
  }
}