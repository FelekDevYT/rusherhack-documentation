# CommandProcessor

**Package:** `org.rusherhack.core.command.processing`

**Source:** `org/rusherhack/core/command/processing/CommandProcessor.java`

Command processor which processes command arguments
* **Author:** john@rusherhack.org 12/15/2022



## Overview

`CommandProcessor` is a class and implements [ICommandProcessor](/core/command/processing/ICommandProcessor.md).

## Constructor

```java
public CommandProcessor()
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| argumentParserMap | [Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html)&lt;[Predicate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html)&lt;[Class](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html)&lt;`?`&gt;&gt;, [IArg](/core/command/argument/parser/IArg.md)&lt;`?`&gt;&gt; | private final |


## Methods

### processCommand()

```java
public CommandProcessingSink processCommand(CommandManager commandManager, String input)
```

**Returns:** [CommandProcessingSink](/core/command/processing/CommandProcessingSink.md)

### addArgumentParser()

```java
public void addArgumentParser(Class<?> typeClass, IArg<?> parser)
```

### addArgumentParser()

```java
public void addArgumentParser(Predicate<Class<?>> predicate, IArg<?> parser)
```

### getArgumentParser()

```java
public IArg<?> getArgumentParser(Class<?> typeClass)
```

**Returns:** [IArg](/core/command/argument/parser/IArg.md)&lt;`?`&gt;

