import { Command } from './command'
import { ICommandHandler } from './command-handler'

export abstract class ICommandBus {
  abstract execute<TCommand extends Command>(command: TCommand): Promise<any>

  abstract register(handlers: readonly ICommandHandler[]): void
}
