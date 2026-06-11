# AbstractCommand

**Package:** `org.rusherhack.core.command`

**Source:** `org/rusherhack/api/javadoc/core/command/AbstractCommand.java`

**Author:** john@rusherhack.org



## Overview

`AbstractCommand` is a class and implements [IFeature](/api/javadoc/core/feature/IFeature.md), [IHideable](/api/javadoc/core/interfaces/IHideable.md).

## Constructor

```java
public AbstractCommand(String name, String description)
```

**Parameter `name`**: base name of the command


**Parameter `description`**: description of what the command does



```java
public AbstractCommand(AbstractCommand parent, String name, String description)
```

**Parameter `parent`**: parent command


**Parameter `name`**: base name of the command


**Parameter `description`**: description of what the command does



## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| description | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| aliases | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt; | private final |
| parent | [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md) | private final |
| subCommands | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)&gt; | private final |


## Methods

### addAliases()

```java
public void addAliases(String aliases)
```

Add aliases to the command

### registerSubCommand()

```java
public void registerSubCommand(AbstractCommand command)
```

Registers a new subcommand

### getName()

```java
public String getName()
```

**Returns**: name of the command



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDisplayName()

```java
public String getDisplayName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDescription()

```java
public String getDescription()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getAliases()

```java
public String[] getAliases()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### getParent()

```java
public AbstractCommand getParent()
```

**Returns:** [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)

### getSubCommands()

```java
public List<AbstractCommand> getSubCommands()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)&gt;

### isHidden()

```java
public boolean isHidden()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getReferenceKey()

```java
public String getReferenceKey()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

