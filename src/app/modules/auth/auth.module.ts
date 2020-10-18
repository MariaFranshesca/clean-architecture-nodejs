import { Module } from '@nestjs/common'
import { UserController } from './user/user.controller'
import { AuthController } from './auth.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from 'src/core/data/source/database/mongodb/schema/user.schema'
import { UserMongoDB } from 'src/core/data/source/database/mongodb/user.mongodb'
import { UserUseCase } from 'src/core/domain/usecases/user.usecase'
import { UserRepository } from 'src/core/domain/repository/user.repository'


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController, AuthController],
  providers: [UserUseCase, { provide: UserRepository, useClass: UserMongoDB }],
  exports: [{ provide: UserRepository, useClass: UserMongoDB }],
})
export class AuthModule {}
