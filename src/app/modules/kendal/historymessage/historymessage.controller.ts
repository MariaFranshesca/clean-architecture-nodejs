import { Controller, Post, HttpStatus, Body } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger'
import { HistoryMessage } from 'src/core/domain/entities/entity/historymessage.entity'
import { IHistoryMessage } from 'src/core/domain/entities/interfaces/historymessage.interfaces'
import { HistoryMessageUseCase } from 'src/core/domain/usecases/historymessage.usecase'

@Controller('historymessage')
@ApiUseTags('HistoryMessage')
export class HistorymessageController {
  constructor(private readonly historymsgUseCase: HistoryMessageUseCase) {}
  @Post()
  @ApiOperation({ title: 'Filter HistoryMessage' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Filter historymessage success',
    type: HistoryMessage,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  async find(@Body() filters: HistoryMessage): Promise<IHistoryMessage[]> {
    return await this.historymsgUseCase.find(filters)
  }
}
