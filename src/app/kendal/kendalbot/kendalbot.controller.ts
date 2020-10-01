import {
  Controller,
  Post,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  Body,
  HttpException,
} from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { KendalBotResponse } from '../../../entities/entity/kendalbot.entity';
import { KendalBotUseCase } from '../../../usecases/usecase/kendalbot.usecase';
import { KendalBotDto } from '../../../entities/dto/kendalbot.dto';
import { HeaderKendalBotDto } from '../../../entities/dto/headerkendalbot.dto';

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
  async chatbot(@Body() kendalbotDto: KendalBotDto) {
    try {
      const headerKendalBot = new HeaderKendalBotDto(
        'localhost',
        'chrome',
        'desktop',
        'JMENDOZAT',
      );
      return await this.kendalBotUseCase.chatBot(headerKendalBot, kendalbotDto);
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
