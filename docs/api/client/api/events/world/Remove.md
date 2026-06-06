# Remove

**Package:** `org.rusherhack.client.api.events.world`

**Source:** `org/rusherhack/client/api/events/world/EventEntity.java`

## Overview

`Remove` is a class that extends [EventEntity](/client/api/events/world/EventEntity.md).

## Constructor

```java
public Remove(Entity entity, Entity.RemovalReason reason)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| reason | `Entity.RemovalReason` | private final |


## Methods

### getReason()

```java
public Entity.RemovalReason getReason()
```

**Returns:** `Entity.RemovalReason`

### getStage()

```java
public Stage getStage()
```

**Returns**: PRE or POST



**Returns:** `Stage`

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

