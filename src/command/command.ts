import { Message } from '../message'

export abstract class Command extends Message {
  protected readonly _tag = 'Command'
}
