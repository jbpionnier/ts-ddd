export * from './command'
export * from './ddd'
export * from './event'
export * from './exceptions'
export * from './message'
export * from './query'

export type Type<T = unknown> = new (...arguments_: readonly any[]) => T
