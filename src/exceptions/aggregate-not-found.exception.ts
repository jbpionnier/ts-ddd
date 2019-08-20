export class AggregateNotFoundException extends Error {
  constructor() {
    super('The aggregate was not found in the event store')
  }
}
