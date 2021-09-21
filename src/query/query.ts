import { Message } from '../message'

export abstract class Query extends Message {
  protected readonly _QUERY = Symbol()
}
