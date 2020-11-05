import { User } from '../entities/User'

export abstract class UserRepository {
  abstract create(user: User): Promise<User>
  abstract deleteById(id: string): Promise<string>
  abstract update(user: User): Promise<string>
  abstract findAll(): Promise<User[]>
}
