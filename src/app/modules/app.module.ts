import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { KendalModule } from './kendal/kendal.module'
import { StatusController } from './status/status.controller'
import { AuthModule } from './auth/auth.module'
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
    }),
    AuthModule,
    KendalModule
  ],
  controllers: [StatusController],
})
export class AppModule {}
