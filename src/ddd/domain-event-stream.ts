import { DomainEvent } from './domain-event'

type DomainEvents = readonly DomainEvent<any>[]

export class DomainEventStream {
  readonly events: DomainEvents

  constructor(events: ReadonlyArray<DomainEvent<any> | undefined>) {
    this.events = (events || []).filter((event: DomainEvent<any> | undefined) => !!event) as DomainEvents
  }

  isEmpty(): boolean {
    return this.events == null || this.events.length === 0
  }
}
