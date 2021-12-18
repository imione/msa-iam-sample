import { NestFactory } from '@nestjs/core';

import { AppModule } from '@apps/user-management/AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
