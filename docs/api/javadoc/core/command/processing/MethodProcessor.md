# MethodProcessor

**Package:** `org.rusherhack.core.command.processing`

**Source:** `org/rusherhack/api/javadoc/core/command/processing/CommandProcessingSink.java`

## Overview

`MethodProcessor` is a class.

## Constructor

```java
public MethodProcessor(CommandData commandData, CommandData.MethodData methodData)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| commandData | [CommandData](/api/javadoc/core/command/CommandData.md) | private final |
| methodData | `CommandData.MethodData` | private final |
| argsDepth | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| parsedArguments | [LinkedHashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html)&lt;`CommandData.ArgumentData`, [Object](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html)&gt; | private final |
| err | [CommandException](/api/javadoc/core/command/exceptions/CommandException.md) | private |


## Methods

### process()

```java
public void process(String arguments)
```

### processed()

```java
public ProcessedCommand processed()
```

**Returns:** [ProcessedCommand](/api/javadoc/core/command/processing/ProcessedCommand.md)

### getError()

```java
public CommandException getError()
```

**Returns:** [CommandException](/api/javadoc/core/command/exceptions/CommandException.md)

### getCommandData()

```java
public CommandData getCommandData()
```

**Returns:** [CommandData](/api/javadoc/core/command/CommandData.md)

### getMethodData()

```java
public CommandData.MethodData getMethodData()
```

**Returns:** `CommandData.MethodData`

### getParsedArguments()

```java
public LinkedHashMap<CommandData.ArgumentData, Object> getParsedArguments()
```

**Returns:** [LinkedHashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html)&lt;`CommandData.ArgumentData`, [Object](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html)&gt;

### getBaseDepth()

```java
public int getBaseDepth()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

