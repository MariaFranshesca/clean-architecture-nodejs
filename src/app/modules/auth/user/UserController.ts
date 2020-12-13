import { Controller, Post, HttpStatus, UsePipes, HttpException, Body, Get } from '@nestjs/common'
import { User } from '../../../../core/domain/entities/User'
import { UserUseCase } from '../../../../core/domain/usecases/UserUseCase'
import { ValidationPipe } from '../../../pipes/validation.pipe'

@Controller('user')
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() user: User) {
    try {
      return await this.userUseCase.create(user)
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userUseCase.findAll()
  }
}
