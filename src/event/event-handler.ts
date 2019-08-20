import { IEvent, Type } from '../index'

export const EVENTS_HANDLER_METADATA = Symbol.for('EventHandler')

export const EventsHandler = (...events: readonly Type<IEvent>[]): ClassDecorator => {
  return (target: any): void => {
    Reflect.defineMetadata(EVENTS_HANDLER_METADATA, events, target.prototype)
  }
}

export interface IEventHandler<TEvent extends IEvent = any> {
  handle(event: TEvent): Promise<void>
}

export type EventHandlerTypes = readonly Type<IEventHandler>[]
