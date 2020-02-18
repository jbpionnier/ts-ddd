import { JSONObject } from 'tiny-types'
import { DomainEvent } from './domain-event'
import { DomainEventStream } from './domain-event-stream'
import { Entity, Identifier } from './entity'

export class AggregateId extends Identifier {}

export abstract class AggregateRoot<TId extends AggregateId> extends Entity<TId> {
  // tslint:disable-next-line:readonly-keyword
  _version: number = 0

  loadFromHistory(stream: DomainEventStream): void {
    stream.events.forEach((event: DomainEvent<any>): any => this.apply(event))
  }

  apply(...events: readonly DomainEvent<AggregateRoot<TId>>[]): readonly DomainEvent<AggregateRoot<TId>>[] {
    events.forEach((event: DomainEvent<AggregateRoot<TId>>): void => {
      this._version = event.aggregateVersion
      const handler = this.getEventHandler(event)
      handler && handler.call(this, event)
    })
    return events
  }

  toJSON(): JSONObject {
    const { _version, ...data } = super.toJSON() as JSONObject
    return data
  }

  protected getEventHandler(event: DomainEvent<AggregateRoot<TId>>): any {
    const handler = `on${this.getEventName(event)}`
    // @ts-ignore
    return this[handler]
  }

  protected getEventName(event: DomainEvent<AggregateRoot<TId>>): string {
    const { constructor } = Object.getPrototypeOf(event)
    return constructor.name as string
  }
}
