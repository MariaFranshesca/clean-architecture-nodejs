import { Controller, HttpStatus, Body, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger'
import { ThreadMessage } from 'src/core/domain/entities/entity/threadmessage.entity'
import { IThreadMessage } from 'src/core/domain/entities/interfaces/threadmessage.interfaces'
import { ThreadMessageUseCase } from 'src/core/domain/usecases/threadmessage.usercase'

@Controller('threadmessage')
@ApiUseTags('ThreadMessage')
export class ThreadmessageController {
  constructor(private readonly threadMsgUseCase: ThreadMessageUseCase) {}

  @Post()
  @ApiOperation({ title: 'Add logical knowledge to Kendal' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Filter threadmessage success',
    type: ThreadMessage,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  async find(@Body() filters: ThreadMessage): Promise<IThreadMessage[]> {
    return await this.threadMsgUseCase.find(filters)
  }
}
