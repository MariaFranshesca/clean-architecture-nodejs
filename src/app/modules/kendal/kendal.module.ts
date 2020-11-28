import { Module } from '@nestjs/common'
import { KendalController } from './kendal.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { HistoryMessageController } from './historymessage/HistoryMessageController'
import { ThreadMessageController } from './threadmessage/ThreadMessageController'
import { AuthModule } from '../auth/auth.module'
import { KendalRepositoryImpl } from 'src/core/data/repository/KendalRepositoryImpl'
import { KendalDataSource } from 'src/core/data/source/KendalDataSource'
import { KendalSchema } from 'src/core/data/source/database/mongodb/schema/KendalSchema'
import { HistoryMessageSchema } from 'src/core/data/source/database/mongodb/schema/HistoryMessageSchema'
import { ThreadMessageSchema } from 'src/core/data/source/database/mongodb/schema/ThreadMessageSchema'
import { KendalUseCase } from 'src/core/domain/usecases/KendalUseCase'
import { KendalRepository } from 'src/core/domain/repository/KendalRepository'
import { KendalBotRepository } from 'src/core/domain/repository/KendalBotRepository'
import { KendalMongoDB } from 'src/core/data/source/database/mongodb/KendalMongoDB'
import { HistoryMessageRepository } from 'src/core/domain/repository/HistoryMessageRepository'
import { HistoryMessageMongoDB } from 'src/core/data/source/database/mongodb/HistoryMessageMongoDB'
import { ThreadMessageMongoDB } from 'src/core/data/source/database/mongodb/ThreadMessageMongoDB'
import { ThreadMessageDataSource } from 'src/core/data/source/ThreadMessageDataSource'
import { HistoryMessageDataSource } from 'src/core/data/source/HistoryMessageDataSource'
import { HistoryMessageRepositoryImpl } from 'src/core/data/repository/HistoryMessageRepositoryImpl'
import { KendalBotRepositoryImpl } from 'src/core/data/repository/KendalBotRepositoryImpl'
import { KendalBotDataSource } from 'src/core/data/source/KendalBotDataSource'
import { KendalBotMongoDB } from 'src/core/data/source/database/mongodb/KendalBotMongoDB'
import { HistoryMessageUseCase } from 'src/core/domain/usecases/historymessageUsecase'
import { ThreadMessageUseCase } from 'src/core/domain/usecases/ThreadMessageUseCase'
import { ThreadMessageRepositoryImpl } from 'src/core/data/repository/ThreadMessageRepositoryImpl'
import { ThreadMessageRepository } from 'src/core/domain/repository/ThreadMessageRepository'
import { KendalBotController } from './kendalbot/KendalBotController'
import { KendalBotUseCase } from 'src/core/domain/usecases/KendalBotUseCase'

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'Kendal', schema: KendalSchema },
      { name: 'HistoryMessage', schema: HistoryMessageSchema },
      { name: 'ThreadMessage', schema: ThreadMessageSchema },
    ]),
  ],
  controllers: [KendalController, HistoryMessageController, ThreadMessageController, KendalBotController],
  providers: [
    KendalBotUseCase,
    KendalUseCase,
    HistoryMessageUseCase,
    ThreadMessageUseCase,
    { provide: ThreadMessageDataSource, useClass: ThreadMessageMongoDB },
    { provide: ThreadMessageRepository, useClass: ThreadMessageRepositoryImpl },
    { provide: HistoryMessageDataSource, useClass: HistoryMessageMongoDB },
    { provide: HistoryMessageRepository, useClass: HistoryMessageRepositoryImpl },
    { provide: KendalRepository, useClass: KendalRepositoryImpl },
    { provide: KendalDataSource, useClass: KendalMongoDB },
    { provide: KendalBotRepository, useClass: KendalBotRepositoryImpl },
    { provide: KendalBotDataSource, useClass: KendalBotMongoDB }
  ],
})
export class KendalModule {}
