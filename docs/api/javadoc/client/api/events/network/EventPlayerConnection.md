# EventPlayerConnection

**Package:** `org.rusherhack.client.api.events.network`

**Source:** `org/rusherhack/api/javadoc/client/api/events/network/EventPlayerConnection.java`

This event is called when a player joins/leaves the server.
* **Author:** John200410 8/24/2023



## Overview

`EventPlayerConnection` is a class that extends `Event`.

## Constructor

```java
public EventPlayerConnection(Action action, UUID uuid, String name, PlayerInfo playerInfo)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| action | [Action](/api/javadoc/client/api/events/network/Action.md) | private final |
| uuid | [UUID](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html) | private final |
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| playerInfo | `PlayerInfo` | private final |


## Methods

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getUUID()

```java
public UUID getUUID()
```

**Returns:** [UUID](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html)

### getAction()

```java
public Action getAction()
```

**Returns:** [Action](/api/javadoc/client/api/events/network/Action.md)

### getPlayerInfo()

```java
public PlayerInfo getPlayerInfo()
```

**Returns:** `PlayerInfo`

