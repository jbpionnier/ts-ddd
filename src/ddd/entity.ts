import { ensure, isDefined, Predicate, TinyType } from 'tiny-types'

export abstract class Identifier extends TinyType {
  constructor(readonly value: string) {
    super()
    ensure(this.constructor.name, value, isNotEmpty())
  }

  toString(): string {
    return this.value
  }
}

export abstract class Entity<TId extends Identifier> extends TinyType {
  constructor(readonly id: TId) {
    super()
    ensure(this.constructor.name, id, isDefined())
  }

  equals(object: Entity<TId>): boolean {
    if (object == null) {
      return false
    }
    if (this === object) {
      return true
    }
    if (!isEntity(object)) {
      return false
    }

    return this.id.equals(object.id)
  }
}

function isEntity(v?: object): boolean {
  return v instanceof Entity
}

export function isNotEmpty(): Predicate<string | ReadonlyArray<string>> {
  return Predicate.to(`be not empty`, (value: string | ReadonlyArray<string>) => !(value == null || value.length === 0))
}
