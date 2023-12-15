import { AggregateId, AggregateRoot, DomainEventStream } from '../ddd'
import { Type } from '../index'

export type EventsByAggregateId = {
  readonly [aggregateId: string]: DomainEventStream
}

export abstract class EventStore {
  abstract save(stream: DomainEventStream): Promise<void>

  abstract load(aggregateId: AggregateId): Promise<DomainEventStream>

  abstract loadByIds(aggregateIds: ReadonlyArray<string>): Promise<EventsByAggregateId>

  abstract loadFromAuthor(author: string): Promise<DomainEventStream>

  abstract allOf(aggregateType: Type<AggregateRoot<any>>): Promise<EventsByAggregateId>
}
