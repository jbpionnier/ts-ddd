export class HandlerNotFoundException extends Error {
  constructor(messageName: string) {
    super(`No handler found for ${messageName}`)
  }
}
