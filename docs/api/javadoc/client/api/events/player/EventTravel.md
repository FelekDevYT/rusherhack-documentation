# EventTravel

**Package:** `org.rusherhack.client.api.events.player`

**Source:** `org/rusherhack/api/javadoc/client/api/events/player/EventTravel.java`

Wraps around Player#travel method



Useful for changing the direction the player is moving
* **Author:** john@rusherhack.org 9/8/2023



## Overview

`EventTravel` is a class that extends `Event`.

## Constructor

```java
public EventTravel(Vec2 rotationVector, Action action)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| action | [Action](/api/javadoc/client/api/events/network/Action.md) | private final |
| yaw | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private |
| pitch | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private |


## Methods

### getRotationVector()

```java
public Vec2 getRotationVector()
```

**Returns:** `Vec2`

### getAction()

```java
public Action getAction()
```

**Returns:** [Action](/api/javadoc/client/api/events/network/Action.md)

### getYaw()

```java
public float getYaw()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setYaw()

```java
public void setYaw(float yaw)
```

### getPitch()

```java
public float getPitch()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setPitch()

```java
public void setPitch(float pitch)
```

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

