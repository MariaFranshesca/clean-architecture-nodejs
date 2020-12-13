import { Injectable } from '@nestjs/common'
import { User } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repository/UserRepository'
import { UserDataSource } from '../source/UserDataSource'

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private userDataSource: UserDataSource) {}

  async create(user: User): Promise<User> {
    return await this.userDataSource.create(user)
  }
  async findAll(): Promise<User[]> {
    return await this.userDataSource.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.userDataSource.deleteById(id)
  }
  async update(user: User): Promise<string> {
    return await this.userDataSource.update(user)
  }
}
