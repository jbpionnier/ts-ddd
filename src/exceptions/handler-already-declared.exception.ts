export class HandlerAlreadyDeclaredException extends Error {
  constructor(messageName: string) {
    super(`A handler has already been declared for ${messageName}`)
  }
}
