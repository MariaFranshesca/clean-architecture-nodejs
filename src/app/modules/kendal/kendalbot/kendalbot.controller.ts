import { Controller, Post, HttpStatus, UsePipes, ValidationPipe, Body, HttpException, Headers } from '@nestjs/common'
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { HeaderKendalBotDto } from 'src/core/domain/entities/dto/headerkendalbot.dto'
import { KendalBotDto } from 'src/core/domain/entities/dto/kendalbot.dto'
import { KendalBotResponse } from 'src/core/domain/entities/entity/kendalbot.entity'
import { KendalBotUseCase } from 'src/core/domain/usecases/kendalbot.usecase'

@Controller('kendalbot')
@ApiUseTags('KendalBot')
export class KendalbotController {
  constructor(private readonly kendalBotUseCase: KendalBotUseCase) {}

  @Post()
  @ApiOperation({ title: 'Query logical knowledge to KendalBot' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'KendalBot logical knowledge query successfully.',
    type: KendalBotResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  @UsePipes(new ValidationPipe())
  async chatbot(@Headers() headers, @Body() kendalbotDto: KendalBotDto) {
    try {
      const { ip, device, aditionalInfo, username } = headers
      const headerKendalBot = new HeaderKendalBotDto(ip, device, aditionalInfo, username)
      return await this.kendalBotUseCase.chatBot(headerKendalBot, kendalbotDto)
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
