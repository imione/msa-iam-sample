import { Entity } from '@libs/ddd/model/Entity';
import { Id } from '@libs/ddd/model/Id';

export abstract class AggregateRoot<TId extends Id> extends Entity<TId> {}
