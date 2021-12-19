import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { Resource } from '@apps/user-management/user/infra/persistence/common/Resource';
import { RootEntity } from '@apps/user-management/user/infra/persistence/common/RootEntity';
import { User } from '@apps/user-management/user/infra/persistence/user/User';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [RootEntity, Resource, User],
      dbName: 'UserManagement',
      host: '127.0.0.1',
      port: 13306,
      user: 'root',
      password: 'test',
      type: 'mysql',
    }),
  ],
})
export class CoreModule {}
