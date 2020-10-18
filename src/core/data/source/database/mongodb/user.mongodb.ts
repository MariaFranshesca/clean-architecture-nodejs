import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { UserRepository } from 'src/core/domain/repository/user.repository'
import { IUser } from 'src/core/domain/entities/interfaces/user.interfaces'
import { UserDto } from 'src/core/domain/entities/dto/user.dto'

export class UserMongoDB implements UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(createUserDto: UserDto): Promise<IUser> {
    const createUser = new this.userModel(createUserDto)
    return await createUser.save()
  }
  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec()
  }
  async findByUsername(username: string): Promise<IUser> {
    return await this.userModel.findOne({ username }).lean()
  }
}
