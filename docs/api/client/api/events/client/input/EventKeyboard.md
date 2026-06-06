# EventKeyboard

**Package:** `org.rusherhack.client.api.events.client.input`

**Source:** `org/rusherhack/client/api/events/client/input/EventKeyboard.java`

This event is called during keyboard updates
* 
@see [GLFW Keyboard input documentation](https://www.glfw.org/docs/3.3/input_guide.html#input_keyboard)**Author:** John200410 1/16/2023



## Overview

`EventKeyboard` is a class that extends `EventCancellable`.

## Constructor

```java
public EventKeyboard(int key, int scanCode, int action, int modifiers)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| key | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| scanCode | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| action | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| modifiers | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getStage()

```java
public Stage getStage()
```

`Stage`#PRE - called before the key is processed



`Stage`#ON - called before the key is pressed, but only while there is no gui screen open



`Stage`#POST - called after the key is processed

**Returns:** `Stage`

### getKey()

```java
public int getKey()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getScanCode()

```java
public int getScanCode()
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

