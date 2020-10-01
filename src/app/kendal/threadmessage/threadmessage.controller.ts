import { Controller, HttpStatus, Body, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { IThreadMessage } from '../../../entities/interfaces/threadmessage.interfaces';
import { ThreadMessageUseCase } from '../../../usecases/usecase/threadmessage.usercase';
import { ThreadMessage } from '../../../entities/entity/threadmessage.entity';

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
    return await this.threadMsgUseCase.find(filters);
  }
}
