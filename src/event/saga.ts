import 'reflect-metadata'

export const SAGA_METADATA = Symbol.for('Saga')

export const Saga = (): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol): void => {
    const properties = Reflect.getMetadata(SAGA_METADATA, target.constructor) || []

    Reflect.defineMetadata(SAGA_METADATA, [...properties, propertyKey], target.constructor)
  }
}
