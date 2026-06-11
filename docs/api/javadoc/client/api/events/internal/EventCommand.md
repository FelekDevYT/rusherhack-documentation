# EventCommand

**Package:** `org.rusherhack.client.api.events.internal`

**Source:** `org/rusherhack/api/javadoc/client/api/events/internal/EventCommand.java`

**Author:** John200410 12/16/2022



## Overview

`EventCommand` is a class that extends `Event`.

## Constructor

```java
public EventCommand(String input)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| input | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| output | `Component` | private |


## Methods

### getInput()

```java
public String getInput()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getOutput()

```java
public String getOutput()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getOutputAsComponent()

```java
public Component getOutputAsComponent()
```

**Returns:** `Component`

### setOutput()

```java
public void setOutput(Component output)
```

### getStage()

```java
public Stage getStage()
```

ON - called before command is processed

**Returns:** `Stage`

