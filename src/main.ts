import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false // SIRVER PARA VALIDAR QUE SOLO SE MANDEN LAS PROPIEDADES QUE SI EXISTEN
    })
  )
  await app.listen(3000);
}
bootstrap();
