# Configuration

**Package:** `org.rusherhack.client.api.config`

**Source:** `org/rusherhack/client/api/config/Configuration.java`

Utility class for serializing and deserializing objects to and from disk.
* NOTE: alot of config related stuff is scheduled to change in rusherhack v2.1
* **Author:** John200410 1/24/2023



## Overview

`Configuration` is a class and implements [INamed](/core/interfaces/INamed.md).

## Constructor

```java
public Configuration(File file)
```

```java
public Configuration(String name, File file)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| CONFIG_DIRECTORY | [Path](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html) | public static final |
| logger | [ILogger](/core/logging/ILogger.md) | public final |
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| file | [File](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html) | private final |
| loadPriority | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | protected |


## Methods

### write()

```java
public abstract void write(ISerializable<?> serializable)
```

### read()

```java
public abstract void read(ISerializable<?> serializable)
```

### getFile()

```java
public File getFile()
```

**Returns:** [File](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html)

### createTempFile()

```java
protected File createTempFile()
```

**Returns:** [File](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html)

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setLoadPriority()

```java
public void setLoadPriority(int loadPriority)
```

### getLoadPriority()

```java
public int getLoadPriority()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

