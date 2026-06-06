# BooleanArg

**Package:** `org.rusherhack.core.command.argument.parser.impl`

**Source:** `org/rusherhack/core/command/argument/parser/impl/BooleanArg.java`

**Author:** John200410 12/15/2022



## Overview

`BooleanArg` is a class and implements [IArg](/core/command/argument/parser/IArg.md).

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| TRUE_ALIASES | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |
| FALSE_ALIASES | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |


## Methods

### parse()

```java
public Boolean parse(CommandProcessingSink context, String arg)
```

**Returns:** [Boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getSuggestions()

```java
public List<String> getSuggestions(CommandProcessingSink context, CommandData.ArgumentData argument, String typedArgument)
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

