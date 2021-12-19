import { Module } from '@nestjs/common';

import { CoreModule } from '@apps/user-management/core/CoreModule';
import { UserModule } from '@apps/user-management/user/UserModule';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
