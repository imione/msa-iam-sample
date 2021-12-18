import { Module } from '@nestjs/common';

import { UserModule } from '@apps/user-management/user/UserModule';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
