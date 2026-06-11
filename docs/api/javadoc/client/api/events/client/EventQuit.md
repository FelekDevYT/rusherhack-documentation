# EventQuit

**Package:** `org.rusherhack.client.api.events.client`

**Source:** `org/rusherhack/api/javadoc/client/api/events/api/javadoc/client/EventQuit.java`

This event is called when the player quits the game, or disconnects from the server.
* **Author:** John200410 7/5/2023



## Overview

`EventQuit` is a class that extends `EventCancellable`.

## Constructor

```java
public EventQuit(Reason reason)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| reason | [Reason](/api/javadoc/client/api/events/api/javadoc/client/Reason.md) | private final |


## Methods

### getReason()

```java
public Reason getReason()
```

**Returns:** [Reason](/api/javadoc/client/api/events/api/javadoc/client/Reason.md)

### getStage()

```java
public Stage getStage()
```

`Stage`#PRE - called when a quit is requested, cancellable



`Stage`#POST - called after a quit happens, not cancellable

**Returns:** `Stage`

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

