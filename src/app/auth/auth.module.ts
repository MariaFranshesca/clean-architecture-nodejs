import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { AuthController } from './auth.controller';
import { UserUseCase } from '../../usecases/usecase/user.usecase';
import { UserRepository } from '../../usecases/repository/user.repository';
import { UserMongoDB } from '../../data/mongodb/user.mongodb';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../data/mongodb/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController, AuthController],
  providers: [UserUseCase, { provide: UserRepository, useClass: UserMongoDB }],
  exports: [{ provide: UserRepository, useClass: UserMongoDB }],
})
export class AuthModule {}
