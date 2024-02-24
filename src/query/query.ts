import { Message } from '../message'

export abstract class Query extends Message {
  protected readonly _tag = 'Query'
}
