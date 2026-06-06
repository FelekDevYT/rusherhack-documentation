# ILog

**Package:** `org.rusherhack.core.logging`

**Source:** `org/rusherhack/core/logging/ILog.java`

**Author:** John200410 3/11/2023



## Overview

`ILog` is a interface.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| SEPARATOR | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) |  |


## Methods

### info()

```java
 void info(String message)
```

### warn()

```java
 void warn(String message)
```

### error()

```java
 void error(String message)
```

### debug()

```java
 void debug(String message)
```

### info()

```java
default void info(String message, Object args)
```

### warn()

```java
default void warn(String message, Object args)
```

### error()

```java
default void error(String message, Object args)
```

### debug()

```java
default void debug(String message, Object args)
```

### info()

```java
default void info(String message, boolean separators)
```

### warn()

```java
default void warn(String message, boolean separators)
```

### error()

```java
default void error(String message, boolean separators)
```

### debug()

```java
default void debug(String message, boolean separators)
```

### constructLogRecord()

```java
private static LogRecord constructLogRecord(Level level, String message, Object args)
```

**Returns:** `LogRecord`

