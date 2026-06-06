# Builder

**Package:** `org.rusherhack.client.api.utils.objects`

**Source:** `org/rusherhack/client/api/utils/objects/PlayerInput.java`

## Overview

`Builder` is a class.

## Constructor

```java
public Builder(LocalPlayer player)
```

```java
public Builder(Input input)
```

```java
public Builder()
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| forward | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| backwards | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| left | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| right | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| jumping | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| sneaking | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### build()

```java
public PlayerInput build()
```

**Returns:** [PlayerInput](/client/api/utils/objects/PlayerInput.md)

### forward()

```java
public boolean forward()
```

**Returns**: The player's forward input state



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### forward()

```java
public Builder forward(boolean forward)
```

Sets the player's forward input

**Returns:** [Builder](/client/api/utils/objects/Builder.md)

### backwards()

```java
public boolean backwards()
```

**Returns**: The player's backwards input state



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### backwards()

```java
public Builder backwards(boolean backwards)
```

Sets the player's backwards input

**Returns:** [Builder](/client/api/utils/objects/Builder.md)

### left()

```java
public boolean left()
```

**Returns**: The player's left input state



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### left()

```java
public Builder left(boolean left)
```

Sets the player's left input

**Returns:** [Builder](/client/api/utils/objects/Builder.md)

### right()

```java
public boolean right()
```

**Returns**: The player's right input state



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### right()

```java
public Builder right(boolean right)
```

Sets the player's right input

**Returns:** [Builder](/client/api/utils/objects/Builder.md)

### jump()

```java
public boolean jump()
```

**Returns**: The player's jump input state



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### jump()

```java
public Builder jump(boolean jump)
```

Sets the player's jump input

**Returns:** [Builder](/client/api/utils/objects/Builder.md)

### sneak()

```java
public boolean sneak()
```

**Returns**: The player's sneak input state



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### sneak()

```java
public Builder sneak(boolean sneak)
```

Sets the player's sneak input

**Returns:** [Builder](/client/api/utils/objects/Builder.md)

### release()

```java
public void release()
```

Sets all inputs to false

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

### movementVector()

```java
public Vec2 movementVector()
```

**Returns:** `Vec2`

