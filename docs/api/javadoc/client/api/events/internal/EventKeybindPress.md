# EventKeybindPress

**Package:** `org.rusherhack.client.api.events.internal`

**Source:** `org/rusherhack/api/javadoc/client/api/events/internal/EventKeybindPress.java`

**Author:** John200410 5/15/2023



## Overview

`EventKeybindPress` is a class that extends `Event`.

## Constructor

```java
public EventKeybindPress(EventKeyboard event)
```

```java
public EventKeybindPress(EventMouse.Key event)
```

```java
public EventKeybindPress(Type type, int keyCode)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| type | [Type](/api/javadoc/client/api/events/internal/Type.md) | private final |
| keyCode | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getType()

```java
public Type getType()
```

**Returns:** [Type](/api/javadoc/client/api/events/internal/Type.md)

### getKeyCode()

```java
public int getKeyCode()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### doesMatch()

```java
public boolean doesMatch(IKey key)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

