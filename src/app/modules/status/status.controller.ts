import { Controller, Get, HttpStatus, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiUseTags, ApiImplicitParam } from '@nestjs/swagger'

@Controller('status')
@ApiUseTags('Status')
export class StatusController {
  @Get(':ping')
  @ApiImplicitParam({ name: 'ping' })
  @ApiOperation({ title: 'Ping Pong Status' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The found record',
  })
  async status(@Param() params): Promise<string> {
    const ping = params.ping === undefined ? 'ping' : params.ping
    return await `${ping} -> pong`
  }
}
