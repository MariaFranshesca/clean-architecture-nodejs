import { Controller, Body, Post, Get } from '@nestjs/common'
import { ThreadMessage } from '../../../../core/domain/entities/ThreadMessage'
import { ThreadMessageUseCase } from '../../../../core/domain/usecases/ThreadMessageUseCase'

@Controller('threadmessage')
export class ThreadMessageController {
  constructor(private readonly threadMsgUseCase: ThreadMessageUseCase) {}

  @Post()
  async find(@Body() filters: ThreadMessage): Promise<ThreadMessage[]> {
    return await this.threadMsgUseCase.find(filters)
  }
  @Get()
  async findAll(): Promise<ThreadMessage[]> {
    return await this.threadMsgUseCase.findAll()
  }
}
