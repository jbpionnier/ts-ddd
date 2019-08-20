import { AggregateId, AggregateRoot } from './aggregate-root'

export abstract class ReadRepository<TId extends AggregateId, TRoot extends AggregateRoot<TId>> {
  abstract get(id: TId): Promise<TRoot>

  // exists(id: TId): Promise<boolean>
}

export abstract class Repository<TId extends AggregateId, TRoot extends AggregateRoot<TId>> extends ReadRepository<TId, TRoot> {
  abstract add(root: TRoot): Promise<void>

  abstract delete(root: TRoot): Promise<void>
}
