import { Message } from '../message'

export abstract class Command extends Message {
  readonly _tag = 'Command'
}
