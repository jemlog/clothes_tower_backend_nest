import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import hpp from 'hpp';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet({ contentSecurityPolicy: false }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const config = new DocumentBuilder()
    .setTitle('Cloth_Tower API')
    .setDescription('Information system SE project Backend API')
    .setVersion('1.0')
    .addTag('clothes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
