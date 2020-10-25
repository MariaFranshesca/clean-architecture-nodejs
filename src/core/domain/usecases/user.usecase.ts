import { Injectable } from '@nestjs/common'
import { UserDto } from '../entities/dto/user.dto'
import { IUser } from '../entities/interfaces/user.interfaces'
import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: UserDto): Promise<IUser> {
    return await this.userRepository.create(createUserDto)
  }
  async findAll(): Promise<IUser[]> {
    return await this.userRepository.findAll()
  }
  async findByUsername(username: string): Promise<IUser> {
    return await this.findByUsername(username)
  }
}
