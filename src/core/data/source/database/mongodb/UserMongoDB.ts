import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { UserDocument } from 'src/core/data/source/database/mongodb/documents/UserDocument'
import { User } from 'src/core/domain/entities/User'
import { UserDataSource } from '../../UserDataSource'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserMongoDB implements UserDataSource {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {
    const createUser = new this.userModel(user)
    return await createUser.save()
  }
  async deleteById(id: string): Promise<string> {
    await this.userModel.deleteOne({ _id: id })
    return 'Eliminado correctamente'
  }
  async update(user: User): Promise<string> {
    await this.userModel.findByIdAndUpdate(user.id, user)
    return 'Editado correctamente'
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec()
  }
  async findByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).let()
  }
}
