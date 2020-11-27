import { Module } from '@nestjs/common'
import { UserUseCase } from 'src/core/domain/usecases/UserUseCase'
import { UserRepository } from 'src/core/domain/repository/UserRepository'
import { UserRepositoryImpl } from 'src/core/data/repository/UserRepositoryImpl'
import { UserDataSource } from 'src/core/data/source/UserDataSource'
import { UserMongoDB } from 'src/core/data/source/database/mongodb/UserMongoDB'
import { MongooseModule } from '@nestjs/mongoose'
import { KendalSchema } from 'src/core/data/source/database/mongodb/schema/KendalSchema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Kendal', schema: KendalSchema },
    ]),
  ],
  providers: [
    UserUseCase,
    { provide: UserDataSource, useClass: UserMongoDB },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ]
})
export class DemoModule {}
