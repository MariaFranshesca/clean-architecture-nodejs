import { UserDto } from '../../entities/dto/user.dto';
import { IUser } from '../../entities/interfaces/user.interfaces';

export abstract class UserRepository {
  abstract create(createUserDto: UserDto): Promise<IUser>;
  abstract findAll(): Promise<IUser[]>;
  abstract findByUsername(username: string): Promise<IUser>;
}
