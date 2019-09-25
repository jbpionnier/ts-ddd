import { DomainEvent } from '../ddd'
import { EventStream } from '../event'

type DomainEvents = ReadonlyArray<DomainEvent<any>>

export class DomainEventStream {
  readonly events: DomainEvents

  constructor(events: DomainEvents) {
    this.events = events
  }

  isEmpty(): boolean {
    return this.events == null || this.events.length === 0
  }

  static withEvents(stream: EventStream): DomainEventStream {
    const domainEvents: DomainEvents = stream.events.filter((event: unknown) => event instanceof DomainEvent) as any
    return new DomainEventStream(domainEvents)
  }
}
