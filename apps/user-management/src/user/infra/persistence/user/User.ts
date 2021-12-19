import { Entity } from '@mikro-orm/core';

import { Resource } from '@apps/user-management/user/infra/persistence/common/Resource';

@Entity({ tableName: 'User' })
export class User extends Resource {}
