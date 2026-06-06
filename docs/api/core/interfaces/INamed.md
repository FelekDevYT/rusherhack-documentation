# INamed

**Package:** `org.rusherhack.core.interfaces`

**Source:** `org/rusherhack/core/interfaces/INamed.java`

**Author:** John200410



## Overview

`INamed` is a interface.

## Methods

### getName()

```java
 String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDisplayName()

```java
default String getDisplayName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getAliases()

```java
default String[] getAliases()
```

Returns an array of accepted aliases for this object.



MUST include ``#getName().
* **Returns**: array of accepted aliases



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

