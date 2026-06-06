# CommandUtils

**Package:** `org.rusherhack.core.command`

**Source:** `org/rusherhack/core/command/CommandUtils.java`

**Author:** john@rusherhack.org 5/19/2024



## Overview

`CommandUtils` is a class.

## Methods

### processArguments()

```java
public static List<String> processArguments(String input, boolean removeQuotes)
```

Separates a string into arguments



Accounting for quotes

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

### generateSyntaxList()

```java
public static List<String> generateSyntaxList(CommandData commandData, boolean subCommands, boolean includeName)
```

Generates a list of strings with command syntax

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

### generateSyntaxList()

```java
public static List<String> generateSyntaxList(CommandData commandData, boolean subCommands, boolean includeName, int maxDepth)
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

### generateSyntaxList()

```java
private static List<String> generateSyntaxList(CommandData commandData, boolean subCommands, boolean includeName, int maxDepth, int depth)
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt;

