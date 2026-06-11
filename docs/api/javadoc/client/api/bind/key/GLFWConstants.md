# GLFWConstants

**Package:** `org.rusherhack.client.api.bind.key`

**Source:** `org/rusherhack/api/javadoc/client/api/bind/key/GLFWConstants.java`

**Author:** John200410 1/25/2023



## Overview

`GLFWConstants` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| KEYBOARD_MAP | `Int2ObjectMap`&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]&gt; | public static final |
| MOUSE_MAP | `Int2ObjectMap`&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]&gt; | public static final |
| GAMEPAD_MAP | `Int2ObjectMap`&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]&gt; | public static final |
| KEYBOARD_PREFIX | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |
| MOUSE_PREFIX | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |
| GAMEPAD_PREFIX | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |


## Methods

### fromLabel()

```java
public static IKey fromLabel(String label)
```

**Returns:** [IKey](/api/javadoc/core/bind/key/IKey.md)

### getKeyboardKey()

```java
public static int getKeyboardKey(String key)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getKeyboardKeyString()

```java
public static String getKeyboardKeyString(int key, boolean prefix)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getMouseKey()

```java
public static int getMouseKey(String key)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getMouseKeyString()

```java
public static String getMouseKeyString(int key, boolean prefix)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

