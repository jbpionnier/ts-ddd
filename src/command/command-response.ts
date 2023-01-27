import { IEvent } from '../ddd'
import { EventStream } from '../event'

type ResponseType = string | number | boolean | object | undefined
type IEvents = ReadonlyArray<IEvent | undefined>

export class CommandResponse {
  readonly value: ResponseType
  readonly events: EventStream

  private constructor(value: ResponseType, events: EventStream) {
    this.value = value
    this.events = events
  }

  hasEvents(): boolean {
    return !this.events.isEmpty()
  }

  static withValue(value: ResponseType, ...events: IEvents): CommandResponse {
    return new CommandResponse(value, new EventStream(events))
  }

  static withEvents(...events: IEvents): CommandResponse {
    return new CommandResponse(undefined, new EventStream(events))
  }
}
