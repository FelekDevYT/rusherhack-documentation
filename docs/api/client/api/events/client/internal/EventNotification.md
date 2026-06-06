# EventNotification

**Package:** `org.rusherhack.client.api.events.client.internal`

**Source:** `org/rusherhack/client/api/events/client/internal/EventNotification.java`

This event gets called when a notification is being processed by the NotificationManager
* 
@author John200410**Author:** historian



## Overview

`EventNotification` is a class that extends `EventCancellable`.

## Constructor

```java
public EventNotification(NotificationType type, Component text, boolean chat, boolean hud)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| type | [NotificationType](/core/notification/NotificationType.md) | private final |
| text | `Component` | private final |
| chat | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |
| hud | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |


## Methods

### getType()

```java
public NotificationType getType()
```

Get the type of the notification
* **Returns**: the type of the notification



**Returns:** [NotificationType](/core/notification/NotificationType.md)

### getText()

```java
public Component getText()
```

Get the text of the notification
* **Returns**: the text of the notification



**Returns:** `Component`

### isChat()

```java
public boolean isChat()
```

**Returns**: true if the notification will be sent to the chat



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isHud()

```java
public boolean isHud()
```

**Returns**: true if the notification will be sent to the HUD



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

