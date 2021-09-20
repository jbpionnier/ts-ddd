import { Type } from '../index'

export abstract class Message {}

export interface MessageHandler<TMessage extends Message, TResponse = any> {
  execute(messageType: Type<TMessage>, ...args: any[]): Promise<TResponse>
}
