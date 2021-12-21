import { MikroORM } from '@mikro-orm/core';

import { Resource } from '@apps/user-management/user/infra/persistence/common/Resource';
import { RootEntity } from '@apps/user-management/user/infra/persistence/common/RootEntity';
import { User } from '@apps/user-management/user/infra/persistence/user/User';

type MigrationMode = 'create' | 'up' | 'down' | 'pending';

(async () => {
  const mode = process.argv[2] as MigrationMode;

  const orm = await MikroORM.init({
    entities: [RootEntity, Resource, User],
    dbName: 'UserManagement',
    host: '127.0.0.1',
    port: 13306,
    user: 'root',
    password: 'test',
    type: 'mysql',
    migrations: {
      tableName: 'MikroOrmMigrations',
      path: './apps/user-management/__migrations',
    },
  });

  const migrator = orm.getMigrator();

  switch (mode) {
    case 'create':
      await migrator.createMigration();
      break;
    case 'up':
      await migrator.up();
      break;
    case 'down':
      break;
    case 'pending':
      const pendingMigrations = await migrator.getPendingMigrations();
      console.log(pendingMigrations.map(migrations => migrations.file));
      break;
  }

  await orm.close(true);
})();
