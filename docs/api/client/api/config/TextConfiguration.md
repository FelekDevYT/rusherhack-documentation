# TextConfiguration

**Package:** `org.rusherhack.client.api.config`

**Source:** `org/rusherhack/client/api/config/TextConfiguration.java`

**Author:** John200410 7/6/2023



## Overview

`TextConfiguration` is a class that extends [Configuration](/client/api/config/Configuration.md).

## Constructor

```java
public TextConfiguration(String name, File file)
```

```java
public TextConfiguration(File file)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| newLines | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### createConfiguration()

```java
public static TextConfiguration createConfiguration(String name)
```

**Returns:** [TextConfiguration](/client/api/config/TextConfiguration.md)

### createConfiguration()

```java
public static TextConfiguration createConfiguration(String parentDirectory, String name)
```

**Returns:** [TextConfiguration](/client/api/config/TextConfiguration.md)

### write()

```java
public void write(ISerializable<?> serializable)
```

### read()

```java
public void read(ISerializable<?> serializable)
```

### allowNewLines()

```java
public TextConfiguration allowNewLines()
```

**Returns:** [TextConfiguration](/client/api/config/TextConfiguration.md)

