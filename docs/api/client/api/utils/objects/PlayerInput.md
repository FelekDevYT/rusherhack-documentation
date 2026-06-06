# PlayerInput

**Package:** `org.rusherhack.client.api.utils.objects`

**Source:** `org/rusherhack/client/api/utils/objects/PlayerInput.java`

Immutable class representing player input key states
* **Author:** john@rusherhack.org 7/24/2025



## Overview

`PlayerInput` is a record.

## Constructor

```java
public PlayerInput(LocalPlayer player)
```

```java
public PlayerInput(Input input)
```

## Methods

### x()

```java
public float x()
```

**Returns**: impulse of left/right strafing



**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### y()

```java
public float y()
```

**Returns**: impulse of forward/backwards



**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### horizontalVector()

```java
public Vec2 horizontalVector()
```

**Returns:** `Vec2`

### hasHorizontalInput()

```java
public boolean hasHorizontalInput()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

