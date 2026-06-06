# Dimension

**Package:** `org.rusherhack.client.api.utils.objects`

**Source:** `org/rusherhack/client/api/utils/objects/Dimension.java`

Enum for dimension type and checks for current dimension
* **Author:** john@rusherhack.org 6/19/2025



## Overview

`Dimension` is a enum.

## Constructor

```java
 Dimension(String displayName)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| displayName | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |


## Constants

### OVERWORLD

Arguments: "The Overworld"

### NETHER

Arguments: "The Nether"

### END

Arguments: "The End"

## Methods

### getDisplayName()

```java
public String getDisplayName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### isOverworld()

```java
public boolean isOverworld()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isNether()

```java
public boolean isNether()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isEnd()

```java
public boolean isEnd()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isLoaded()

```java
public boolean isLoaded()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getLoaded()

```java
public static Dimension getLoaded()
```

**Returns**: the dimension the player is currently in; null if world is not loaded



**Returns:** [Dimension](/client/api/utils/objects/Dimension.md)

