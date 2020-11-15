import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api')
  app.listenAsync(process.env.PORT || 3000)
}
bootstrap()
