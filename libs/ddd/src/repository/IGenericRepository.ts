import { AggregateRoot } from '@libs/ddd/model/AggregateRoot';
import { Id } from '@libs/ddd/model/Id';

export interface IGenericRepository<
  TAggregateRoot extends AggregateRoot<TId>,
  TId extends Id
> {
  nextId: () => TId;
  find: (id: TId) => Promise<TAggregateRoot | null>;
  save: (aggr: TAggregateRoot) => Promise<TAggregateRoot>;
  remove: (id: TId) => Promise<void>;
}
