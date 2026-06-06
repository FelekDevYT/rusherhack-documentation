# IConfigManager

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/IConfigManager.java`

Interface for rusherhack's config manager
* NOTE: this will probably be heavily changed in rusherhack v2.1
* **Author:** john@rusherhack.org 12/14/2025



## Overview

`IConfigManager` is a interface.

## Methods

### registerConfig()

```java
 void registerConfig(Configuration config, ISerializable<?> serializable)
```

Register a config to the config manager.



It will be automatically saved/loaded alongside other rusherhack configs

### reloadConfig()

```java
 boolean reloadConfig(Configuration config)
```

Loads a config

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### saveConfig()

```java
 boolean saveConfig(Configuration config)
```

Saves a config

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### load()

```java
 void load()
```

Loads all configs

### save()

```java
 void save()
```

Saves all configs

