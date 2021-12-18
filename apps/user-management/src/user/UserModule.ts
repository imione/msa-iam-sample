import { Module } from '@nestjs/common';

import { UserController } from '@apps/user-management/user/interface/UserController';

@Module({
  controllers: [UserController],
})
export class UserModule {}
