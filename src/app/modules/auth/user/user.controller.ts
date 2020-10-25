import { Controller, Post, HttpStatus, UsePipes, HttpException, Body, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger'
import { UserDto } from 'src/core/domain/entities/dto/user.dto'
import { User } from 'src/core/domain/entities/entity/user.entity'
import { IUser } from 'src/core/domain/entities/interfaces/user.interfaces'
import { UserUseCase } from 'src/core/domain/usecases/user.usecase'

import { ValidationPipe } from '../../../pipes/validation.pipe'

@Controller('user')
@ApiUseTags('User')
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Post()
  @ApiOperation({ title: 'Add KendalBot user or maintainer user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: User,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: UserDto) {
    try {
      return await this.userUseCase.create(createUserDto)
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  @Get()
  @ApiOperation({ title: 'Return all user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The found record',
    type: User,
  })
  async findAll(): Promise<IUser[]> {
    return await this.userUseCase.findAll()
  }
}
