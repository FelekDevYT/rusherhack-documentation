# InputBuilder

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/InputBuilder.java`

Class for modifying `net.minecraft.world.entity.player.Input` objects
* **Author:** john@rusherhack.org 12/28/2024



## Overview

`InputBuilder` is a class.

## Constructor

```java
public InputBuilder()
```

```java
public InputBuilder(Input input)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| forward | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| backward | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| left | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| right | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| jump | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| shift | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| sprint | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### forward()

```java
public InputBuilder forward(boolean forward)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### backward()

```java
public InputBuilder backward(boolean backward)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### left()

```java
public InputBuilder left(boolean left)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### right()

```java
public InputBuilder right(boolean right)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### jump()

```java
public InputBuilder jump(boolean jump)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### shift()

```java
public InputBuilder shift(boolean shift)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### sprint()

```java
public InputBuilder sprint(boolean sprint)
```

**Returns:** [InputBuilder](/client/api/utils/InputBuilder.md)

### build()

```java
public Input build()
```

**Returns:** `Input`

