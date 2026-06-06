# EventInputTick

**Package:** `org.rusherhack.client.api.events.client.input`

**Source:** `org/rusherhack/client/api/events/client/input/EventInputTick.java`

Event is when the local player's input is being updated
* **Author:** John200410 7/8/2023



## Overview

`EventInputTick` is a class that extends `Event`.

## Constructor

```java
public EventInputTick(PlayerInput.Builder input)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| input | `PlayerInput.Builder` | private final |


## Methods

### getInput()

```java
public PlayerInput.Builder getInput()
```

**Returns:** `PlayerInput.Builder`

### getStage()

```java
public Stage getStage()
```

ON, POST

**Returns:** `Stage`

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

