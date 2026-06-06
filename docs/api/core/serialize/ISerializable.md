# ISerializable

**Package:** `org.rusherhack.core.serialize`

**Source:** `org/rusherhack/core/serialize/ISerializable.java`

Interface for things that can be saved to disk
* **Author:** John200410



## Overview

`ISerializable` is a interface.

## Methods

### serialize()

```java
 T serialize()
```

**Returns:** `T`

### deserialize()

```java
 boolean deserialize(T obj)
```

Deserializes the given object
* **Parameter `obj`**: the object to deserialize


**Returns**: whether the deserialization was successful



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### shouldSerialize()

```java
default boolean shouldSerialize(boolean autosave)
```

Whether this object should be serialized
* **Parameter `autosave`**: whether this is an autosave


**Returns**: whether this object should be serialized



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### shouldAutoSave()

```java
default boolean shouldAutoSave()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

