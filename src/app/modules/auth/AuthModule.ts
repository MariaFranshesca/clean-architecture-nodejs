import { Module } from '@nestjs/common'
import { UserController } from './user/UserController'
import { AuthController } from './AuthController'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from '../../../core/data/source/database/mongodb/schema/UserSchema'
import { UserUseCase } from '../../../core/domain/usecases/UserUseCase'
import { UserRepository } from '../../../core/domain/repository/UserRepository'
import { UserRepositoryImpl } from '../../../core/data/repository/UserRepositoryImpl'
import { UserDataSource } from '../../../core/data/source/UserDataSource'
import { UserMongoDB } from '../../../core/data/source/database/mongodb/UserMongoDB'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController, AuthController],
  providers: [
    UserUseCase,
    { provide: UserDataSource, useClass: UserMongoDB },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
  exports: [
    { provide: UserDataSource, useClass: UserMongoDB },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
})
export class AuthModule {}
