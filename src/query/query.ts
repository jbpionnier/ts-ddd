import { Message } from '../message'

export abstract class Query extends Message {
  readonly _tag = 'Query'
}
