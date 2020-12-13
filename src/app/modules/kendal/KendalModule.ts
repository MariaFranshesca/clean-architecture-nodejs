import { Module } from '@nestjs/common'
import { KendalController } from './KendalController'
import { MongooseModule } from '@nestjs/mongoose'
import { HistoryMessageController } from './historymessage/HistoryMessageController'
import { ThreadMessageController } from './threadmessage/ThreadMessageController'
import { AuthModule } from '../auth/AuthModule'
import { KendalRepositoryImpl } from '../../../core/data/repository/KendalRepositoryImpl'
import { KendalDataSource } from '../../../core/data/source/KendalDataSource'
import { KendalSchema } from '../../../core/data/source/database/mongodb/schema/KendalSchema'
import { HistoryMessageSchema } from '../../../core/data/source/database/mongodb/schema/HistoryMessageSchema'
import { ThreadMessageSchema } from '../../../core/data/source/database/mongodb/schema/ThreadMessageSchema'
import { KendalUseCase } from '../../../core/domain/usecases/KendalUseCase'
import { KendalRepository } from '../../../core/domain/repository/KendalRepository'
import { KendalBotRepository } from '../../../core/domain/repository/KendalBotRepository'
import { KendalMongoDB } from '../../../core/data/source/database/mongodb/KendalMongoDB'
import { HistoryMessageRepository } from '../../../core/domain/repository/HistoryMessageRepository'
import { HistoryMessageMongoDB } from '../../../core/data/source/database/mongodb/HistoryMessageMongoDB'
import { ThreadMessageMongoDB } from '../../../core/data/source/database/mongodb/ThreadMessageMongoDB'
import { ThreadMessageDataSource } from '../../../core/data/source/ThreadMessageDataSource'
import { HistoryMessageDataSource } from '../../../core/data/source/HistoryMessageDataSource'
import { HistoryMessageRepositoryImpl } from '../../../core/data/repository/HistoryMessageRepositoryImpl'
import { KendalBotRepositoryImpl } from '../../../core/data/repository/KendalBotRepositoryImpl'
import { KendalBotDataSource } from '../../../core/data/source/KendalBotDataSource'
import { KendalBotMongoDB } from '../../../core/data/source/database/mongodb/KendalBotMongoDB'
import { HistoryMessageUseCase } from '../../../core/domain/usecases/HistoryMessageUsecase'
import { ThreadMessageUseCase } from '../../../core/domain/usecases/ThreadMessageUseCase'
import { ThreadMessageRepositoryImpl } from '../../../core/data/repository/ThreadMessageRepositoryImpl'
import { ThreadMessageRepository } from '../../../core/domain/repository/ThreadMessageRepository'
import { KendalBotController } from './kendalbot/KendalBotController'
import { KendalBotUseCase } from '../../../core/domain/usecases/KendalBotUseCase'

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
    { provide: KendalBotDataSource, useClass: KendalBotMongoDB },
  ],
})
export class KendalModule {}
