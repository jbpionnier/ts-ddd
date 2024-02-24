# ts-ddd

[![npm version](https://badge.fury.io/js/%40jbpionnier%2Fddd.svg)](https://badge.fury.io/js/%40jbpionnier%2Fddd)
[![Build Status](https://travis-ci.org/jbpionnier/ts-ddd.svg?branch=master)](https://travis-ci.org/jbpionnier/ts-ddd)
[![npm](https://img.shields.io/npm/dm/%40jbpionnier%2Fddd.svg)](https://npm-stat.com/charts.html?package=%40jbpionnier%2Fddd)

Utilities types for Domain-Driven Design in TypeScript

> [!WARNING]
> Work in progress.

## Installation

```bash
npm install @jbpionnier/ddd
```

## Usage

 - ICommandBus / Command / CommandHandler
 - IQueryBus / Query / QueryHandler
 - IEventBus / Event / EventHandler
 - AggregateRoot
 - DomainEvent / DomainEventStream
 - Entity / ValueObject
 - Repository
 - EventStream / Saga
 - EventStore

### ICommandBus / Command / CommandHandler

```typescript
import { ICommandBus, ICommandHandler, Command } from '@jbpionnier/ddd'

class MyCommand implements Command {
  constructor(public readonly id: string) {}
}

@CommandHandler(MyCommand)
class MyCommandHandler implements ICommandHandler<ImportMediaCommand> {
  handle(command: MyCommand): void {
    console.log('Handling command', command)
  }
}
// Create the command bus
const commandBus: ICommandBus = new CommandBus()
commandBus.register(new MyCommandHandler())

// Execute the command
commandBus.execute(new MyCommand('123'))
```
