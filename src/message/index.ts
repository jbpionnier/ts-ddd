export abstract class Message {}

export interface MessageHandler<TMessage extends Message, TResponse> {
  execute(message: TMessage): Promise<TResponse>
}
