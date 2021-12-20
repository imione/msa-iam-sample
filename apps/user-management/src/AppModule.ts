import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validationSchema } from '@apps/user-management/config/ValidationSchema';
import DatabaseConfig from '@apps/user-management/config/DatabaseConfig';
import { CoreModule } from '@apps/user-management/core/CoreModule';
import { UserModule } from '@apps/user-management/user/UserModule';

const configs = [DatabaseConfig];

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      envFilePath: [
        `${__dirname}/config/envs/.${process.env.NODE_ENV ??
          'development'}.env`,
      ],
      load: [...configs],
      isGlobal: true,
      validationSchema,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
