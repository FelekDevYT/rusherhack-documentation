# CommandManager

**Package:** `org.rusherhack.core.command`

**Source:** `org/rusherhack/core/command/CommandManager.java`

Command manager
* **Author:** john@rusherhack.org 12/15/2022



## Overview

`CommandManager` is a class and implements [ICommandManager](/core/command/ICommandManager.md).

## Constructor

```java
public CommandManager(ILogger logger)
```

```java
public CommandManager(CommandProcessor processor, ILogger logger)
```

```java
public CommandManager(CommandProcessor processor, ICommandDispatcher<?> dispatcher, ILogger logger)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| commands | [Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html)&lt;[AbstractCommand](/core/command/AbstractCommand.md), [CommandData](/core/command/CommandData.md)&gt; | private final |
| commandProcessor | [CommandProcessor](/core/command/processing/CommandProcessor.md) | protected final |
| dispatcher | [ICommandDispatcher](/core/command/dispatch/ICommandDispatcher.md)&lt;`?`&gt; | protected |
| logger | [ILogger](/core/logging/ILogger.md) | protected final |


## Methods

### registerFeature()

```java
public void registerFeature(AbstractCommand commandObject)
```

Register a command

### createCommandData()

```java
public CommandData createCommandData(AbstractCommand command)
```

**Returns:** [CommandData](/core/command/CommandData.md)

### getCommandData()

```java
public CommandData getCommandData(String command)
```

**Returns:** [CommandData](/core/command/CommandData.md)

### getCommandData()

```java
public CommandData getCommandData(AbstractCommand command)
```

**Returns:** [CommandData](/core/command/CommandData.md)

### getFeature()

```java
public Optional<AbstractCommand> getFeature(String name)
```

**Returns:** [Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)&lt;[AbstractCommand](/core/command/AbstractCommand.md)&gt;

### getFeatures()

```java
public List<AbstractCommand> getFeatures()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[AbstractCommand](/core/command/AbstractCommand.md)&gt;

### getCommandProcessor()

```java
public CommandProcessor getCommandProcessor()
```

**Returns:** [CommandProcessor](/core/command/processing/CommandProcessor.md)

### getDispatcher()

```java
public ICommandDispatcher<?> getDispatcher()
```

**Returns:** [ICommandDispatcher](/core/command/dispatch/ICommandDispatcher.md)&lt;`?`&gt;

### getPrefix()

```java
public String getPrefix()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getLogger()

```java
public ILogger getLogger()
```

**Returns:** [ILogger](/core/logging/ILogger.md)

