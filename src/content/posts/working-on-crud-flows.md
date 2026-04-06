---
title: "How I Structure Complex CRUD Flows with DDD and CQRS"
date: 2026-04-01
tags: ["crud", "ddd", "nestjs", "cqrs", "backend"]
description: "How I end up implementing complex CRUD flows, splitting responsibilities and testing what matters, using CQRS and DDD"
---

## The problem

Typical CRUD flow on the backend usually follows a simple structure: controller → service → repository. While controllers tend to stay small and straightforward, the service layer often becomes a bottleneck over time.

It’s not uncommon to see service files grow to thousands of lines (2000–10000), handling multiple flows (create, update, delete, fetch), coordinating many dependencies, and mixing business logic with raw SQL queries.

This leads to several problems: the code becomes hard to reason about, difficult to navigate, prone to merge conflicts, and challenging to test in isolation.

This is where Domain-Driven Design (DDD) principles start to help. Rather than letting services own business logic, I keep them focused on orchestrating workflows, while the actual rules live inside the domain layer.

## Service layer

The service layer acts as an orchestrator, coordinating different parts of the system without owning business logic.

Business rules are extracted into the domain layer. This typically includes entities, value objects, and domain-specific rules that reflect real business behavior rather than database structure. This makes it much clearer which layer is responsible for what, and allows the domain to remain focused, reusable, and easy to test.

The domain layer should have as few dependencies as possible. Ideally, it contains pure logic that can be tested without mocks. These tests are fast and can run in a pre-commit hook, providing quick feedback during development.

Another useful pattern is splitting different business flows into separate services. Instead of one large service handling everything, I prefer having dedicated services for create, update, fetch, and delete flows.

## Repository layer

Consider a simple case with two entities: A and B, each with its own service and repository.

Now imagine service A needs data from entity B. There are typically two approaches:

- service A → service B → repository B
- service A → repository B

The first approach introduces indirection, where service B acts mostly as a proxy. The second creates tighter coupling between modules.

Both approaches have trade-offs, and I’ve used them for years. However, they tend to increase coupling and make dependencies harder to reason about as the system grows.

This is where CQRS (Command Query Responsibility Segregation) becomes useful.

The idea is simple:

- **Commands** modify state (create, update, delete)
- **Queries** read data (fetch operations)

Instead of sharing repositories across modules, access is expressed through explicit queries and commands. This avoids leaking internal persistence details and makes dependencies more intentional.

This is the approach I’ve been leaning towards recently:

```text
  module/
  ├── application/
  │   └── service.ts
  ├── cqrs/
  │   ├── query.ts
  │   └── command.ts
  └── domain/
      └── domain.ts
```

How this differs from described repository dependency is that we keep query/command logic local inside module, reducing dependencies between different modules. Of course, it can happen that same query/command is required in different modules, then it can make sense to extract such command and/or query in shared module which is then referenced from multiple places.

## Testing

Achieving baseline test coverage is easier than ever, but structure still matters. I like to start with unit tests, which cover pure domain layer with little to no mocks. They run very fast, no need to wait for application cold start, usually what it takes is simple function call or method call. Next test to add is the one which runs with database. It can be end to end test or integration test, with service or repository serving as a starting point. Idea with such test is to verify that sql statements align with the expectations. This kind of test is slower that a unit test because it needs to start application (whole or part of it), but it helps to cover flow as a whole.

## Closing words

One recurring problem I’ve seen in growing codebases is lack of clear ownership. As systems evolve, responsibilities between layers become blurred, and changes become harder to reason about.

Applying DDD and CQRS helps restore that clarity. Business logic has a clear home, read and write operations are explicitly defined, and dependencies become easier to understand.

The goal is not to blindly apply patterns, but to introduce just enough structure to keep CRUD-heavy applications maintainable as they grow.
