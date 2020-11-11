import { User } from 'src/core/domain/entities/User'
export abstract class UserDataSource {
  abstract create(user: User): Promise<User>
  abstract deleteById(id: string): Promise<string>
  abstract update(user: User): Promise<string>
  abstract findAll(): Promise<User[]>
}