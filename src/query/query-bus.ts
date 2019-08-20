import { Query } from './query'
import { IQueryHandler } from './query-handler'

export abstract class IQueryBus {
  abstract execute<TQuery extends Query, TRes>(query: TQuery): Promise<TRes>

  abstract register(handlers: ReadonlyArray<IQueryHandler>): void
}
