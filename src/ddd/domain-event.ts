import { ensure, isDefined, TinyType } from 'tiny-types'
import { AggregateId, AggregateRoot } from './aggregate-root'

export abstract class IEvent extends TinyType {}

export abstract class DomainEvent<Entity extends AggregateRoot<any>> extends IEvent {
  readonly timestamp: Date = new Date()
  readonly aggregateId: AggregateId
  readonly aggregateType: string
  readonly aggregateVersion: number

  protected constructor(aggregate: Entity) {
    super()
    ensure(this.constructor.name, aggregate, isDefined())
    this.aggregateId = aggregate.id
    this.aggregateType = getAggregateName(aggregate)
    // TODO move increment version
    // tslint:disable-next-line
    this.aggregateVersion = ++aggregate._version
  }
}

function getAggregateName(aggregate: object): string {
  const { constructor } = Object.getPrototypeOf(aggregate)
  return constructor.name as string
}
