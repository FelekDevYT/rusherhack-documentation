# Logger

**Package:** `org.rusherhack.core.logging`

**Source:** `org/rusherhack/core/logging/Logger.java`

TODO: implement slf4j Logger interface
* **Author:** John200410 3/11/2023



## Overview

`Logger` is a class and implements [ILogger](/core/logging/ILogger.md).

## Constructor

```java
public Logger(String name)
```

```java
public Logger(String name, Path logDirectory)
```

```java
public Logger(String name, ILogger parentLogger)
```

```java
public Logger(String name, ILogger parentLogger, Path logDirectory)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| parentLogger | [ILogger](/core/logging/ILogger.md) | private final |
| outputs | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[ILog](/core/logging/ILog.md)&gt; | protected final |


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

### log()

```java
public void log(String msg)
```

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getParent()

```java
public ILogger getParent()
```

**Returns:** [ILogger](/core/logging/ILogger.md)

