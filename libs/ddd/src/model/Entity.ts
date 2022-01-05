import { Id } from '@libs/ddd/model/Id';

export abstract class Entity<TId extends Id> {
  constructor(readonly id: TId) {}

  identical(entity: Entity<TId>): boolean {
    return entity.id.equals(this.id);
  }
}
