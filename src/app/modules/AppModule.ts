import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { StatusController } from './status/status.controller'
import 'dotenv/config'
import { AuthModule } from './auth/AuthModule'
import { KendalModule } from './kendal/KendalModule'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
    }),
    AuthModule,
    KendalModule,
  ],
  controllers: [StatusController],
})
export class AppModule {}
