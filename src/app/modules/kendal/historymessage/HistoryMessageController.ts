import { Controller, Post, Body } from '@nestjs/common'
import { HistoryMessage } from '../../../../core/domain/entities/HistoryMessage'
import { HistoryMessageUseCase } from '../../../../core/domain/usecases/HistoryMessageUsecase'

@Controller('historymessage')
export class HistoryMessageController {
  constructor(private readonly historymsgUseCase: HistoryMessageUseCase) {}
  @Post()
  async find(@Body() filters: HistoryMessage): Promise<HistoryMessage[]> {
    return await this.historymsgUseCase.find(filters)
  }
}
