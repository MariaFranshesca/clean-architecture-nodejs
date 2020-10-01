import {
  Controller,
  Post,
  HttpStatus,
  UsePipes,
  HttpException,
  Body,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { User } from '../../../entities/entity/user.entity';
import { UserUseCase } from '../../../usecases/usecase/user.usecase';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { UserDto } from '../../../entities/dto/user.dto';
import { IUser } from '../../../entities/interfaces/user.interfaces';

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
      return await this.userUseCase.create(createUserDto);
    } catch (err) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
    return await this.userUseCase.findAll();
  }
}
