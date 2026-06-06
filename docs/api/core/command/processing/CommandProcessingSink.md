# CommandProcessingSink

**Package:** `org.rusherhack.core.command.processing`

**Source:** `org/rusherhack/core/command/processing/CommandProcessingSink.java`

Sink that processes command arguments
* **Author:** john@rusherhack.org 5/14/2024



## Overview

`CommandProcessingSink` is a class and implements [Consumer](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Consumer.html).

## Constructor

```java
public CommandProcessingSink(CommandManager commandManager, CommandProcessor commandProcessor)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| commandManager | [CommandManager](/core/command/CommandManager.md) | protected final |
| commandProcessor | [CommandProcessor](/core/command/processing/CommandProcessor.md) | protected final |
| commandData | [CommandData](/core/command/CommandData.md) | protected |
| commandString | `StringJoiner` | protected final |
| inputBuffer | [StringBuilder](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuilder.html) | protected |
| arguments | [ArrayList](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt; | protected |
| candidates | [LinkedHashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html)&lt;[CommandData](/core/command/CommandData.md), [HashSet](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html)&lt;[MethodProcessor](/core/command/processing/MethodProcessor.md)&gt;&gt; | protected |
| currentEntry | [MethodProcessor](/core/command/processing/MethodProcessor.md) | private |


## Methods

### accept()

```java
public void accept(String argument)
```

Accept an argument to be processed
* **Parameter `argument`**: the argument to accept



### finish()

```java
public ProcessedCommand finish(boolean furthestDepth)
```

**Returns:** [ProcessedCommand](/core/command/processing/ProcessedCommand.md)

### getCommandString()

```java
public String getCommandString()
```

Get the command string
* **Returns**: the command string



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getArguments()

```java
public List<String> getArguments()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

### getCommandData()

```java
public CommandData getCommandData()
```

**Returns:** [CommandData](/core/command/CommandData.md)

### getCurrentEntry()

```java
public MethodProcessor getCurrentEntry()
```

**Returns:** [MethodProcessor](/core/command/processing/MethodProcessor.md)

