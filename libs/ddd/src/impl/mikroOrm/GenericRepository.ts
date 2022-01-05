import { AggregateRoot } from '@libs/ddd/model/AggregateRoot';
import { Id } from '@libs/ddd/model/Id';
import { IGenericRepository } from '@libs/ddd/repository/IGenericRepository';

export abstract class GenericRepository<
  TAggregateRoot extends AggregateRoot<TId>,
  TId extends Id
> implements IGenericRepository<TAggregateRoot, TId> {
  abstract nextId(): TId;

  find: (id: TId) => Promise<TAggregateRoot>;

  remove: (id: TId) => Promise<void>;

  save: (aggr: TAggregateRoot) => Promise<TAggregateRoot>;
}
