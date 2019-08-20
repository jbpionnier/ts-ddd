import { DomainEvent, DomainEventStream } from '../ddd'

type ResponseType = string | boolean | object | undefined

type DomainEvents = readonly (DomainEvent<any> | undefined)[]

export class CommandResponse {
  readonly value: ResponseType
  readonly events: DomainEventStream

  private constructor(value: ResponseType, events: DomainEventStream) {
    this.value = value
    this.events = events
  }

  hasEvents(): boolean {
    return !this.events.isEmpty()
  }

  static withValue(value: ResponseType, ...events: DomainEvents): CommandResponse {
    return new CommandResponse(value, new DomainEventStream(events))
  }

  static withEvents(...events: DomainEvents): CommandResponse {
    return new CommandResponse(undefined, new DomainEventStream(events))
  }
}
