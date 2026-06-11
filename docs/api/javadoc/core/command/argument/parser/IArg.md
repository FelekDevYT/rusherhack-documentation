# IArg

**Package:** `org.rusherhack.core.command.argument.parser`

**Source:** `org/rusherhack/api/javadoc/core/command/argument/parser/IArg.java`

Interface for command argument parsers
* **Author:** John200410 12/15/2022



## Overview

`IArg` is a interface.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| EMPTY_SUGGESTIONS | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt; |  |


## Methods

### parse()

```java
 T parse(CommandProcessingSink context, String arg)
```

Parse the argument into an object
* **Parameter `context`**: the command processor context that is processing the command


**Parameter `arg`**: the typed argument


**Returns**: the parsed object


**Throws**: `ArgumentException` - if the argument is invalid



**Returns:** `T`

### getSuggestions()

```java
default List<String> getSuggestions(CommandProcessingSink context, CommandData.ArgumentData argument, String typedArgument)
```

Get argument suggestions based on the typed string
* **Parameter `context`**: the command processor context that is processing the command


**Parameter `argument`**: argument data


**Parameter `typedArgument`**: the typed argument


**Returns**: a list containing suggestions



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

### captureRemaining()

```java
default boolean captureRemaining()
```

**Returns**: whether this should capture all remaining arguments



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

