import { ensure, isDefined } from 'tiny-types'
import { CommandResponse, MessageHandler, Type } from '../'
import { Command } from './command'

export const COMMAND_HANDLER_METADATA = Symbol.for('CommandHandler')

export const CommandHandler = (command: Type<Command>): ClassDecorator => {
  ensure('Command', command.name, isDefined())

  return (target: any): void => {
    Reflect.defineMetadata(COMMAND_HANDLER_METADATA, command, target.prototype)
  }
}

export interface ICommandHandler<TCommand extends Command = any> extends MessageHandler<TCommand, CommandResponse | void> {}

export type CommandHandlerTypes = readonly Type<ICommandHandler>[]
