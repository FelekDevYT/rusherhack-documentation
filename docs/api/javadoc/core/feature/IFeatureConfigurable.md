# IFeatureConfigurable

**Package:** `org.rusherhack.core.feature`

**Source:** `org/rusherhack/api/javadoc/core/feature/IFeatureConfigurable.java`

A feature with configurable settings
* **Author:** John200410 3/6/2023



## Overview

`IFeatureConfigurable` is a interface that extends [IFeature](/api/javadoc/core/feature/IFeature.md).

## Methods

### getSettings()

```java
 List<Setting<?>> getSettings()
```

**Returns**: the list of settings for this feature



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/api/javadoc/core/setting/Setting.md)&lt;`?`&gt;&gt;

### registerSettings()

```java
default void registerSettings(Setting<?> settings)
```

Registers settings to this feature
* @param settings

### getSetting()

```java
default Setting<?> getSetting(String name)
```

Find a setting given its name
* **Parameter `name`**: name of the setting


**Returns**: the setting



**Returns:** [Setting](/api/javadoc/core/setting/Setting.md)&lt;`?`&gt;

### reset()

```java
default boolean reset()
```

Resets this feature to it's default state.



Resets all settings to default.
* **Returns**: true if the feature was reset



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

