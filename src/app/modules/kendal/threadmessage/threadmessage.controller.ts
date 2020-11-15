import { Controller, Body, Post } from '@nestjs/common'
import { ThreadMessage } from 'src/core/domain/entities/ThreadMessage'
import { ThreadMessageUseCase } from 'src/core/domain/usecases/ThreadMessageUseCase'

@Controller('threadmessage')
export class ThreadmessageController {
  constructor(private readonly threadMsgUseCase: ThreadMessageUseCase) {}

  @Post()
  async find(@Body() filters: ThreadMessage): Promise<ThreadMessage[]> {
    return await this.threadMsgUseCase.find(filters)
  }
}
