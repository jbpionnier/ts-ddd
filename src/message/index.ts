export abstract class Message {}

export interface MessageHandler<TMessage extends Message, TResponse = any> {
  execute(message: TMessage): Promise<TResponse>
}
