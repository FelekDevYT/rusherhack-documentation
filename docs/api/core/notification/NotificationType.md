# NotificationType

**Package:** `org.rusherhack.core.notification`

**Source:** `org/rusherhack/core/notification/NotificationType.java`

**Author:** John200410 1/27/2023



## Overview

`NotificationType` is a enum.

## Constructor

```java
 NotificationType(int typeID, long lifeSpan)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| typeID | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| lifeSpan | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private final |


## Constants

### INFO

Arguments: 1, 5000L

### WARNING

Arguments: 2, 7500L

### ERROR

Arguments: 3, 10000L

### HINT

Arguments: 4, 5000L

### DEBUG

Arguments: 256, 5000L

## Methods

### getTypeID()

```java
public int getTypeID()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getLifeSpan()

```java
public long getLifeSpan()
```

**Returns:** [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html)

### fromTypeID()

```java
public static NotificationType fromTypeID(int typeID)
```

**Returns:** [NotificationType](/core/notification/NotificationType.md)

