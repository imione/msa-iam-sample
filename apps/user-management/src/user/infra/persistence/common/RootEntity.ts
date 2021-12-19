import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ abstract: true })
export abstract class RootEntity {
  @PrimaryKey({ columnType: 'varchar', length: 128 })
  id: string;

  @Property({ onCreate: () => new Date(), index: true })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date(), index: true })
  updatedAt: Date;

  @Property({ version: true })
  version: number;
}
