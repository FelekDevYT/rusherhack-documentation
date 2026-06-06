# ICommandProcessor

**Package:** `org.rusherhack.core.command.processing`

**Source:** `org/rusherhack/core/command/processing/ICommandProcessor.java`

Interface for the command processor
* **Author:** john@rusherhack.org 3/12/2025



## Overview

`ICommandProcessor` is a interface.

## Methods

### addArgumentParser()

```java
 void addArgumentParser(Class<?> typeClass, IArg<?> parser)
```

Adds an argument parser to the command processor
* **Parameter `typeClass`**: the class of the type to apply to the parser


**Parameter `parser`**: the argument parser



### addArgumentParser()

```java
 void addArgumentParser(Predicate<Class<?>> predicate, IArg<?> parser)
```

Adds an argument parser to the command processor
* **Parameter `predicate`**: predicate to test if the argument type should be applied to this parser


**Parameter `parser`**: the argument parser



### getArgumentParser()

```java
 IArg<?> getArgumentParser(Class<?> typeClass)
```

**Returns**: argument parser for class type



**Returns:** [IArg](/core/command/argument/parser/IArg.md)&lt;`?`&gt;

