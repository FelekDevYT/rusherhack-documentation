# ICommandManager

**Package:** `org.rusherhack.core.command`

**Source:** `org/rusherhack/core/command/ICommandManager.java`

Interface for accessing the command manager
* **Author:** john@rusherhack.org 7/15/2024



## Overview

`ICommandManager` is a interface that extends [IFeatureManager](/core/feature/IFeatureManager.md).

## Methods

### getCommandProcessor()

```java
 ICommandProcessor getCommandProcessor()
```

**Returns**: the command processor



**Returns:** [ICommandProcessor](/core/command/processing/ICommandProcessor.md)

### getDispatcher()

```java
 ICommandDispatcher<?> getDispatcher()
```

**Returns**: the command dispatcher



**Returns:** [ICommandDispatcher](/core/command/dispatch/ICommandDispatcher.md)&lt;`?`&gt;

### getPrefix()

```java
 String getPrefix()
```

**Returns**: the command prefix



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

