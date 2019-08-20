import { ensure, isDefined } from 'tiny-types'
import { MessageHandler, Type } from '../'
import { Query } from './query'

export const QUERY_HANDLER_METADATA = Symbol.for('QueryHandler')

export const QueryHandler = (query: Type<Query>): ClassDecorator => {
  ensure('Query', query.name, isDefined())

  return (target: any): void => {
    Reflect.defineMetadata(QUERY_HANDLER_METADATA, query, target.prototype)
  }
}

export interface IQueryHandler<TQuery extends Query = any, TRes = any> extends MessageHandler<TQuery, TRes> {}

export type QueryHandlerTypes = ReadonlyArray<Type<IQueryHandler>>
