import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';



async function bootstrap() {

  //Ensure environment vars are defined before the app starts
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000','http://127.0.0.1:3000'], // Replace with your front-end URL
    credentials: true,
  });

  await app.listen(2000);
  console.log("Server running on port 127.0.0.1:2000")
}
bootstrap();
