# IModule

**Package:** `org.rusherhack.client.api.feature.module`

**Source:** `org/rusherhack/client/api/feature/module/IModule.java`

A categorized feature with settings
* **Author:** John200410 1/15/2023



## Overview

`IModule` is a interface that extends [IFeatureConfigurable](/core/feature/IFeatureConfigurable.md), [INotifiable](/core/notification/INotifiable.md), [IHideable](/core/interfaces/IHideable.md), [JsonSerializable](/core/serialize/JsonSerializable.md).

## Methods

### getCategory()

```java
 ModuleCategory getCategory()
```

**Returns**: Category of this module



**Returns:** [ModuleCategory](/client/api/feature/module/ModuleCategory.md)

### getMetadata()

```java
default String getMetadata()
```

**Returns**: A string containing additional information about a running module



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### isDrawn()

```java
 boolean isDrawn()
```

**Returns**: whether this module should be listed in hud elements



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setDrawn()

```java
 void setDrawn(boolean drawn)
```

Sets the drawn state for this module
* **Parameter `drawn`**: state



