# IFeature

**Package:** `org.rusherhack.core.feature`

**Source:** `org/rusherhack/core/feature/IFeature.java`

Interface for describable features
* **Author:** John200410



## Overview

`IFeature` is a interface that extends [INamed](/core/interfaces/INamed.md), [IReferenceable](/core/interfaces/IReferenceable.md).

## Methods

### getDescription()

```java
 String getDescription()
```

Get the description of the feature
* **Returns**: The description



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### reset()

```java
default boolean reset()
```

Resets this feature to it's default state
* **Returns**: true if the feature was reset



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getReferenceKey()

```java
default String getReferenceKey()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

