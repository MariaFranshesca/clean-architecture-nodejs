import { Controller, Post, HttpStatus, UsePipes, ValidationPipe, Body, HttpException, Headers } from '@nestjs/common'
import { KendalBotInput } from 'src/core/domain/entities/KendalBotInput'
import { KendalBotUseCase } from 'src/core/domain/usecases/KendalBotUseCase'
import { KendalBotInputRequest } from './KendalBotInputRequest'

@Controller('kendalbot')
export class KendalbotController {
  constructor(private readonly kendalBotUseCase: KendalBotUseCase) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async chatbot(@Headers() headers, @Body() modelKendalBot: KendalBotInputRequest) {
    try {
      const { ip, device, aditionalInfo, username } = headers
      const kendalBotInput = new KendalBotInput(ip, device, aditionalInfo, username)
      kendalBotInput.input = modelKendalBot.input
      return await this.kendalBotUseCase.chatBot(kendalBotInput)
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
