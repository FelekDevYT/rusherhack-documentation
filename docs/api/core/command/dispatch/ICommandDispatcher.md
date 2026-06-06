# ICommandDispatcher

**Package:** `org.rusherhack.core.command.dispatch`

**Source:** `org/rusherhack/core/command/dispatch/ICommandDispatcher.java`

Command dispatcher interface
* **Author:** John200410 5/24/2024



## Overview

`ICommandDispatcher` is a interface.

## Methods

### execute()

```java
 T execute(ICommandSource source, String input)
```

Executes a command from the given input



This method does not throw exceptions. Instead, it returns the final result of the command
* **Parameter `source`**: the command source


**Parameter `input`**: the input


**Returns**: the result of the command



**Returns:** `T`

### dispatch()

```java
 T dispatch(ICommandSource source, String input)
```

Attempts to dispatch a command from the given input
* **Parameter `source`**: the command source


**Parameter `input`**: the input


**Returns**: the result of the command





**Throws**: `ValidationException` - if the source fails to validate the command


**Throws**: `UnknownCommandException` - if the command processor failed to find a command


**Throws**: `BadSyntaxException` - if the command syntax is invalid


**Throws**: `ArgumentException` - if the command arguments cannot be parsed


**Throws**: `DispatchException` - if the command fails to dispatch



**Returns:** `T`

