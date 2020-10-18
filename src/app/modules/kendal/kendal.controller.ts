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
import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger'
import { ClassKendalDto } from 'src/core/domain/entities/dto/kendal.dto'
import { Kendal } from 'src/core/domain/entities/entity/kendal.entity'
import { IKendal } from 'src/core/domain/entities/interfaces/kendal.interfaces'
import { KendalUseCase } from 'src/core/domain/usecases/kendal.usecase'


@Controller('kendal')
@ApiUseTags('Kendal')
export class KendalController {
  constructor(private readonly kendalUseCase: KendalUseCase) {}
  @Post()
  @ApiOperation({ title: 'Add logical knowledge to Kendal' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: ClassKendalDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() createKendalDto: ClassKendalDto) {
    try {
      const wallv = await this.kendalUseCase.create(createKendalDto)
      return wallv
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  @Get()
  @ApiOperation({ title: 'Return all logical knowledge of Kendal' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The found record',
    type: Kendal,
  })
  async findAll(): Promise<IKendal[]> {
    return await this.kendalUseCase.findAll()
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete one element from Kendal' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The found record',
    type: Kendal,
  })
  @ApiImplicitParam({ name: 'id' })
  async deleteById(@Param() params) {
    await this.kendalUseCase.deleteById(params.id)
    return { status: 1, message: 'Eliminado Correctamente' }
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  @ApiOperation({ title: 'Update logical knowledge to Kendal' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully updated.',
    type: ClassKendalDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  async update(@Param('id') id: string, @Body() updateKendalDto: ClassKendalDto) {
    try {
      return await this.kendalUseCase.update(id, updateKendalDto)
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
