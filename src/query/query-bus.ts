import { Type } from '../index'
import { Query } from './query'
import { IQueryHandler } from './query-handler'

export abstract class IQueryBus {
  abstract execute<TQuery extends Query, TRes>(queryType: Type<TQuery>, ...args: any[]): Promise<TRes>

  abstract register(handlers: ReadonlyArray<IQueryHandler>): void
}
