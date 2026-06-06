# Notification

**Package:** `org.rusherhack.core.notification.type`

**Source:** `org/rusherhack/core/notification/type/Notification.java`

Abstract notification
* **Author:** John200410 1/27/2023



## Overview

`Notification` is a class.

## Constructor

```java
public Notification(String text, NotificationType type)
```

```java
public Notification(String text, NotificationType type, int id)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| text | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| type | [NotificationType](/core/notification/NotificationType.md) | private final |
| id | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getText()

```java
public String getText()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getType()

```java
public NotificationType getType()
```

**Returns:** [NotificationType](/core/notification/NotificationType.md)

### getID()

```java
public int getID()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

