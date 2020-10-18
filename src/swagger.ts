import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Clean Architecture NodeJS')
    .setDescription('The clean architecture for application backend')
    .setVersion('1.0')
    .setContactEmail('jmendozat13@gmail.com')
    .setLicense('MIT', 'https://github.com/jmendozat13/clean-architecture-nodejs/blob/master/LICENSE')
    .setSchemes('http', 'https')
    //.addBearerAuth()
    .setBasePath('api')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
}
