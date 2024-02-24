import { Type } from '../index'
import { Query } from './query'
import { IQueryHandler } from './query-handler'

export abstract class IQueryBus {
  abstract execute<TQuery extends Query, TResult = any>(queryType: Type<TQuery>, ...args: any[]): Promise<TResult>

  abstract register(handlers: ReadonlyArray<IQueryHandler>): void
}
