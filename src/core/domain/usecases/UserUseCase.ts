import { Injectable } from '@nestjs/common'
import { UserRepository } from '../repository/UserRepository'
import { User } from '../entities/User'

@Injectable()
export class KendalUseCase {
  constructor(private userRepository: UserRepository) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.create(user)
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.userRepository.deleteById(id)
  }
  async update(user: User): Promise<string> {
    return await this.userRepository.update(user)
  }
}
