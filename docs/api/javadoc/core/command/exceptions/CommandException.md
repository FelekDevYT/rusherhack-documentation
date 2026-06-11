# CommandException

**Package:** `org.rusherhack.core.command.exceptions`

**Source:** `org/rusherhack/api/javadoc/core/command/exceptions/CommandException.java`

**Author:** John200410 5/14/2024



## Overview

`CommandException` is a class that extends [Exception](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Exception.html).

## Constructor

```java
public CommandException(String message)
```

```java
public CommandException(String message, Throwable cause)
```

```java
public CommandException(String message, CommandProcessingSink context)
```

```java
public CommandException(String message, CommandProcessingSink context, Throwable cause)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| context | [CommandProcessingSink](/api/javadoc/core/command/processing/CommandProcessingSink.md) | private |


## Methods

### setContext()

```java
public void setContext(CommandProcessingSink context)
```

### getContext()

```java
public CommandProcessingSink getContext()
```

**Returns:** [CommandProcessingSink](/api/javadoc/core/command/processing/CommandProcessingSink.md)

### shouldPrintSyntax()

```java
public boolean shouldPrintSyntax()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

