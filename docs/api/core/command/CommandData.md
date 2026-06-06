# CommandData

**Package:** `org.rusherhack.core.command`

**Source:** `org/rusherhack/core/command/CommandData.java`

**Author:** john@rusherhack.org 12/15/2022



## Overview

`CommandData` is a class and implements [INamed](/core/interfaces/INamed.md).

## Constructor

```java
public CommandData(AbstractCommand command)
```

```java
public CommandData(AbstractCommand command, String name, String aliases)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| command | [AbstractCommand](/core/command/AbstractCommand.md) | private final |
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| aliases | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| methods | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[MethodData](/core/command/MethodData.md)&gt; | private final |
| parent | [CommandData](/core/command/CommandData.md) | private |
| subCommands | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[CommandData](/core/command/CommandData.md)&gt; | private final |


## Methods

### getCommand()

```java
public AbstractCommand getCommand()
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getAliases()

```java
public String[] getAliases()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### addMethod()

```java
public void addMethod(Method method, List<ArgumentData> arguments)
```

### getSubCommands()

```java
public List<CommandData> getSubCommands()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[CommandData](/core/command/CommandData.md)&gt;

### findSubCommand()

```java
public CommandData findSubCommand(String alias)
```

**Returns:** [CommandData](/core/command/CommandData.md)

### getMethods()

```java
public List<MethodData> getMethods()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[MethodData](/core/command/MethodData.md)&gt;

### setParent()

```java
public void setParent(CommandData parent)
```

### getParent()

```java
public CommandData getParent()
```

**Returns:** [CommandData](/core/command/CommandData.md)

