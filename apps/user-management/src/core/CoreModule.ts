import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';

import DatabaseConfig from '@apps/user-management/config/DatabaseConfig';

import { Resource } from '@apps/user-management/user/infra/persistence/common/Resource';
import { RootEntity } from '@apps/user-management/user/infra/persistence/common/RootEntity';
import { User } from '@apps/user-management/user/infra/persistence/user/User';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const { host, port, user, password, dbSchema } = configService.get(
          'database',
        ) as ConfigType<typeof DatabaseConfig>;

        return {
          entities: [RootEntity, Resource, User],
          dbName: dbSchema,
          host,
          port,
          user,
          password,
          type: 'mysql',
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class CoreModule {}
