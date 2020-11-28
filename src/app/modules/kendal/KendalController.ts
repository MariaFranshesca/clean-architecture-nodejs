import {
  Controller,
  Post,
  UsePipes,
  Get,
  ValidationPipe,
  Body,
  HttpStatus,
  HttpException,
  Delete,
  Param,
  Put,
} from '@nestjs/common'
import { Kendal } from 'src/core/domain/entities/Kendal'
import { KendalUseCase } from 'src/core/domain/usecases/KendalUseCase'

@Controller('kendal')
export class KendalController {
  constructor(private readonly kendalUseCase: KendalUseCase) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() kendal: Kendal) {
    try {
      const wallv = await this.kendalUseCase.create(kendal)
      return wallv
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  @Get()
  async findAll(): Promise<Kendal[]> {
    return await this.kendalUseCase.findAll()
  }

  @Delete(':id')
  async deleteById(@Param() params) {
    await this.kendalUseCase.deleteById(params.id)
    return { status: 1, message: 'Eliminado Correctamente' }
  }

  @UsePipes(new ValidationPipe())
  @Put()
  async update(@Body() kendal: Kendal) {
    try {
      return await this.kendalUseCase.update(kendal)
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
