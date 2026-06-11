# GLFWKey

**Package:** `org.rusherhack.client.api.bind.key`

**Source:** `org/rusherhack/api/javadoc/client/api/bind/key/GLFWKey.java`

GLFW key implementation
* **Author:** John200410 1/16/2023



## Overview

`GLFWKey` is a class and implements [IKey](/api/javadoc/core/bind/key/IKey.md).

## Constructor

```java
public GLFWKey(int keyCode, int scanCode)
```

```java
public GLFWKey(int scanCode)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| keyCode | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| scanCode | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getKeyCode()

```java
public int getKeyCode()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getScanCode()

```java
public int getScanCode()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### toKeyEvent()

```java
public KeyEvent toKeyEvent()
```

**Returns:** `KeyEvent`

