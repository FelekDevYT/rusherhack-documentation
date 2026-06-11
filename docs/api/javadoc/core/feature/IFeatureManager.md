# IFeatureManager

**Package:** `org.rusherhack.core.feature`

**Source:** `org/rusherhack/api/javadoc/core/feature/IFeatureManager.java`

Interface for feature management systems
* **Author:** John200410 1/17/2023



## Overview

`IFeatureManager` is a interface.

## Methods

### registerFeature()

```java
 void registerFeature(T feature)
```

Registers a new feature
* **Parameter `feature`**: feature to register



### getFeature()

```java
 Optional<T> getFeature(String name)
```

Attempts to find a feature given its name
* **Parameter `name`**: name of the feature


**Returns**: the feature



**Returns:** [Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)&lt;`T`&gt;

### getFeatures()

```java
 Iterable<T> getFeatures()
```

**Returns**: registered features



**Returns:** [Iterable](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Iterable.html)&lt;`T`&gt;

