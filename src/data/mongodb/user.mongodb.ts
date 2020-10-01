import { Model } from 'mongoose';
import { UserRepository } from '../../usecases/repository/user.repository';
import { UserDto } from '../../entities/dto/user.dto';
import { IUser } from '../../entities/interfaces/user.interfaces';
import { InjectModel } from '@nestjs/mongoose';

export class UserMongoDB implements UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(createUserDto: UserDto): Promise<IUser> {
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }
  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }
  async findByUsername(username: string): Promise<IUser> {
    return await this.userModel.findOne({ username }).lean();
  }
}
