import { IEvent } from '../ddd'

type IEvents = ReadonlyArray<IEvent | undefined>

export class EventStream {
  readonly events: ReadonlyArray<IEvent>

  constructor(events: IEvents) {
    this.events = (events || []).filter((event: IEvent | undefined): boolean => !!event) as ReadonlyArray<IEvent>
  }

  isEmpty(): boolean {
    return this.events == null || this.events.length === 0
  }
}
