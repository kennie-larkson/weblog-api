import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = new ConfigService().get('PORT');
  console.log('PORT:', port);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Weblog API documentation')
    .setDescription('This is the API for Weblog backend built with NestJS')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
