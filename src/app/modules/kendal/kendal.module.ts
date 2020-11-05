import { Module } from '@nestjs/common'
import { KendalController } from './kendal.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { KendalbotController } from './kendalbot/kendalbot.controller'
import { HistorymessageController } from './historymessage/historymessage.controller'
import { ThreadmessageController } from './threadmessage/threadmessage.controller'
import { AuthModule } from '../auth/auth.module'
import { KendalRepositoryImpl } from 'src/core/data/repository/KendalRepositoryImpl'
import { KendalDataSource } from 'src/core/data/source/KendalDataSource'
import { KendalSchema } from 'src/core/data/source/database/mongodb/schema/KendalSchema'
import { HistoryMessageSchema } from 'src/core/data/source/database/mongodb/schema/historymessage.schema'
import { ThreadMessageSchema } from 'src/core/data/source/database/mongodb/schema/threadmessage.schema'
import { KendalUseCase } from 'src/core/domain/usecases/KendalUseCase'
import { KendalBotUseCase } from 'src/core/domain/usecases/kendalbot.usecase'
import { HistoryMessageUseCase } from 'src/core/domain/usecases/historymessage.usecase'
import { ThreadMessageUseCase } from 'src/core/domain/usecases/threadmessage.usercase'
import { KendalRepository } from 'src/core/domain/repository/KendalRepository'
import { KendalBotRepository } from 'src/core/domain/repository/kendalbot.repository'
import { KendalMongoDB } from 'src/core/data/source/database/mongodb/KendalMongoDB'
import { KendalBotMongoDB } from 'src/core/data/source/database/mongodb/kendalbot.mongodb'
import { HistoryMessageRepository } from 'src/core/domain/repository/HistoryMessageRepository'
import { HistoryMessageMongoDB } from 'src/core/data/source/database/mongodb/historymessage.mongodb'
import { ThreadMessageRepository } from 'src/core/domain/repository/threadmessage.reposiitory'
import { ThreadMessageMongoDB } from 'src/core/data/source/database/mongodb/ThreadMessageMongoDB'
import { ThreadMessageDataSource } from 'src/core/data/source/ThreadMessageDataSource'
import { HistoryMessageDataSource } from 'src/core/data/source/HistoryMessageDataSource'
import { HistoryMessageRepositoryImpl } from 'src/core/data/repository/HistoryMessageRepositoryImpl'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Kendal', schema: KendalSchema },
      { name: 'HistoryMessage', schema: HistoryMessageSchema },
      { name: 'ThreadMessage', schema: ThreadMessageSchema },
    ]),
    AuthModule,
  ],
  controllers: [KendalController, KendalbotController, HistorymessageController, ThreadmessageController],
  providers: [
    KendalUseCase,
    KendalBotUseCase,
    HistoryMessageUseCase,
    ThreadMessageUseCase,
    { provide: KendalRepository, useClass: KendalRepositoryImpl },
    { provide: KendalDataSource, useClass: KendalMongoDB },
    { provide: KendalBotRepository, useClass: KendalBotMongoDB },
    { provide: ThreadMessageDataSource, useClass: ThreadMessageMongoDB },
    { provide: HistoryMessageRepository, useClass: HistoryMessageRepositoryImpl },
    { provide: HistoryMessageDataSource, useClass: HistoryMessageMongoDB },
    { provide: ThreadMessageRepository, useClass: ThreadMessageMongoDB },
  ],
})
export class KendalModule {}
