import { Module } from '@nestjs/common'
import { UserController } from './user/UserController'
import { AuthController } from './AuthController'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from 'src/core/data/source/database/mongodb/schema/UserSchema'
import { UserUseCase } from 'src/core/domain/usecases/UserUseCase'
import { UserRepository } from 'src/core/domain/repository/UserRepository'
import { UserRepositoryImpl } from 'src/core/data/repository/UserRepositoryImpl'
import { UserDataSource } from 'src/core/data/source/UserDataSource'
import { UserMongoDB } from 'src/core/data/source/database/mongodb/UserMongoDB'

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
