import { JSONObject } from 'tiny-types'
import { getConstrutorName } from '../index'
import { DomainEvent } from './domain-event'
import { DomainEventStream } from './domain-event-stream'
import { Entity, Identifier } from './entity'

export class AggregateId extends Identifier {}

export abstract class AggregateRoot<TId extends AggregateId> extends Entity<TId> {
  _version = 0

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
    const handler = `on${getConstrutorName(event)}`
    // @ts-ignore
    return this[handler]
  }
}
