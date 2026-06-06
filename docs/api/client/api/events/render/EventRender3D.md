# EventRender3D

**Package:** `org.rusherhack.client.api.events.render`

**Source:** `org/rusherhack/client/api/events/render/EventRender3D.java`

This event is called during the game's 3D rendering stage
* **Author:** John200410 5/30/2023



## Overview

`EventRender3D` is a class that extends [EventRender](/client/api/events/render/EventRender.md).

## Constructor

```java
public EventRender3D(IRenderer3D renderer, PoseStack poseStack, float partialTicks)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| renderer | [IRenderer3D](/client/api/render/IRenderer3D.md) | private final |
| poseStack | `PoseStack` | private final |


## Methods

### getMatrixStack()

```java
public PoseStack getMatrixStack()
```

**Returns:** `PoseStack`

### getRenderer()

```java
public IRenderer3D getRenderer()
```

**Returns:** [IRenderer3D](/client/api/render/IRenderer3D.md)

### getLevel()

```java
public Level getLevel()
```

**Returns:** `Level`

