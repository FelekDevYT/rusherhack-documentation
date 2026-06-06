# Key

**Package:** `org.rusherhack.client.api.events.client.input`

**Source:** `org/rusherhack/client/api/events/client/input/EventMouse.java`

This event is called when a mouse button is pressed or released

## Overview

`Key` is a class that extends [EventMouse](/client/api/events/client/input/EventMouse.md).

## Constructor

```java
public Key(int button, int action, int modifiers)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| button | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| action | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| modifiers | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getButton()

```java
public int getButton()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getAction()

```java
public int getAction()
```

**Returns**: {

@link org.lwjgl.glfw.GLFW#GLFW_PRESS}



`org.lwjgl.glfw.GLFW`#GLFW_RELEASE



`org.lwjgl.glfw.GLFW`#GLFW_REPEAT

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getModifiers()

```java
public int getModifiers()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getStage()

```java
public Stage getStage()
```

`Stage`#PRE - called before the key is processed



`Stage`#ON - called before the key is pressed, but only while there is no gui screen open

**Returns:** `Stage`

