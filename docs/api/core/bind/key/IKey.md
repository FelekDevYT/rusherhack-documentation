# IKey

**Package:** `org.rusherhack.core.bind.key`

**Source:** `org/rusherhack/core/bind/key/IKey.java`

Interface for keys
* **Author:** John200410 1/16/2023



## Overview

`IKey` is a interface.

## Methods

### isKeyDown()

```java
 boolean isKeyDown()
```

**Returns**: whether the key is being held down



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getLabel()

```java
 String getLabel(boolean includePrefix)
```

**Returns**: a string representation of the key



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDisplayLabel()

```java
default String getDisplayLabel()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

