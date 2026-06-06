# RenderableNotification

**Package:** `org.rusherhack.client.api.ui.notification`

**Source:** `org/rusherhack/client/api/ui/notification/RenderableNotification.java`

**Author:** John200410 1/27/2023



## Overview

`RenderableNotification` is a class that extends [LivingNotification](/core/notification/type/LivingNotification.md) and implements [IRenderable2D](/client/api/render/IRenderable2D.md), [IClickable](/core/interfaces/IClickable.md).

## Constructor

```java
public RenderableNotification(String text, NotificationType type)
```

```java
public RenderableNotification(String text, NotificationType type, int id)
```

```java
public RenderableNotification(Component component, NotificationType type)
```

```java
public RenderableNotification(Component component, NotificationType type, int id)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| component | `Component` | private final |


## Methods

### getComponent()

```java
public Component getComponent()
```

**Returns:** `Component`

