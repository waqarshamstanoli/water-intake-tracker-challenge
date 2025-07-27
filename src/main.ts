import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from your Next.js app
    credentials: true, // Allow cookies if needed
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
