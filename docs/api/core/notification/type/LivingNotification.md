# LivingNotification

**Package:** `org.rusherhack.core.notification.type`

**Source:** `org/rusherhack/core/notification/type/LivingNotification.java`

This is a notification that has a life span. It will be removed from the notification manager after the life span has passed.



This is useful for notifications that are only meant to be displayed for a short period of time.
* **Author:** John200410 1/27/2023



## Overview

`LivingNotification` is a class that extends [Notification](/core/notification/type/Notification.md) and implements [ITickable](/core/interfaces/ITickable.md).

## Constructor

```java
public LivingNotification(String text, NotificationType type)
```

```java
public LivingNotification(String text, NotificationType type, int id)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| timer | [Timer](/core/utils/Timer.md) | private final |
| lifeSpan | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private final |
| shouldKill | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### getTimer()

```java
public Timer getTimer()
```

**Returns:** [Timer](/core/utils/Timer.md)

### getLifeSpan()

```java
public long getLifeSpan()
```

**Returns:** [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html)

### shouldKillSelf()

```java
public boolean shouldKillSelf()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### kill()

```java
public void kill()
```

