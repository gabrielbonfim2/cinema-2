import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permite o front end acessar a API
  app.enableCors();

  // Valida os dados recebidos
  app.useGlobalPipes(new ValidationPipe());

  // Swagger (documentação da API)
  const config = new DocumentBuilder()
    .setTitle('Cinema RapiDEX API')
    .setDescription('API do sistema de cinema')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('🎬 Cinema API rodando em: http://localhost:3000');
  console.log('📄 Swagger em: http://localhost:3000/api');
}
bootstrap();
