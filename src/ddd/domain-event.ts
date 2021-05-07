import { ensure, isDefined, TinyType } from 'tiny-types'
import { getConstrutorName } from '../index'
import { AggregateId, AggregateRoot } from './aggregate-root'

export abstract class IEvent extends TinyType {
  readonly timestamp: Date = new Date()
}

export abstract class DomainEvent<Entity extends AggregateRoot<any>> extends IEvent {
  readonly aggregateId: AggregateId
  readonly aggregateType: string
  readonly aggregateVersion: number

  protected constructor(aggregate: Entity) {
    super()
    ensure(this.constructor.name, aggregate, isDefined())
    this.aggregateId = aggregate.id
    this.aggregateType = getConstrutorName(aggregate)
    // TODO move increment version
    this.aggregateVersion = ++aggregate._version
  }
}


