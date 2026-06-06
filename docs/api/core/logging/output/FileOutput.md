# FileOutput

**Package:** `org.rusherhack.core.logging.output`

**Source:** `org/rusherhack/core/logging/output/FileOutput.java`

**Author:** John200410 2/9/2024



## Overview

`FileOutput` is a class and implements [ILog](/core/logging/ILog.md).

## Constructor

```java
public FileOutput(Path path)
```

```java
public FileOutput(File file)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| DATE_FORMAT | `SimpleDateFormat` | public static final |
| file | [File](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html) | private |


## Methods

### info()

```java
public void info(String message)
```

### warn()

```java
public void warn(String message)
```

### error()

```java
public void error(String message)
```

### debug()

```java
public void debug(String message)
```

### logToFile()

```java
private void logToFile(String prefix, String message)
```

### getTimestampFormat()

```java
public SimpleDateFormat getTimestampFormat()
```

**Returns:** `SimpleDateFormat`

### createNewFile()

```java
private void createNewFile(Path logDirectory)
```

