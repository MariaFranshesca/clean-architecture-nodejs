import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { UserDocument } from '../../../../data/source/database/mongodb/documents/UserDocument'
import { User } from '../../../../domain/entities/User'
import { UserDataSource } from '../../UserDataSource'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserMongoDB implements UserDataSource {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {
    const createUser = new this.userModel(user)
    const document: UserDocument = await createUser.save()
    return this.mapUserFromDocument(document)
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
    const documents: UserDocument[] = await this.userModel.find().exec()
    return documents.map(item => this.mapUserFromDocument(item))
  }
  async findByUsername(username: string): Promise<User> {
    const document: UserDocument = await this.userModel.findOne({ username }).exec()
    return this.mapUserFromDocument(document)
  }

  private mapUserFromDocument(document: UserDocument) {
    const user = new User()
    user.id = document.id
    user.username = document.username
    user.password = document.password
    user.date = document.date
    return user
  }
}
