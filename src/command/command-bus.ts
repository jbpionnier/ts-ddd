import { Type } from '../index'
import { Command } from './command'
import { ICommandHandler } from './command-handler'

export abstract class ICommandBus {
  abstract execute<TCommand extends Command>(commandType: Type<TCommand>, ...args: any[]): Promise<any>

  abstract register(handlers: readonly ICommandHandler[]): void
}
