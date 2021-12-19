import { Entity, JsonType, Property } from '@mikro-orm/core';

import { RootEntity } from '@apps/user-management/user/infra/persistence/common/RootEntity';

@Entity({ abstract: true })
export abstract class Resource extends RootEntity {
  @Property({ unique: true, index: true })
  externalId: string;

  @Property({ type: JsonType, nullable: true })
  meta: object;
}
