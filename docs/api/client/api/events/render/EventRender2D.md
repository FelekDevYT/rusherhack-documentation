# EventRender2D

**Package:** `org.rusherhack.client.api.events.render`

**Source:** `org/rusherhack/client/api/events/render/EventRender2D.java`

This event is called during the game's 2D rendering stage
* **Author:** John200410



## Overview

`EventRender2D` is a class that extends [EventRender](/client/api/events/render/EventRender.md).

## Constructor

```java
public EventRender2D(GuiGraphics graphics, float partialTicks)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| renderContext | [RenderContext](/client/api/render/RenderContext.md) | private final |
| graphics | `GuiGraphics` | private final |


## Methods

### getMatrixStack()

```java
public Matrix3x2fStack getMatrixStack()
```

**Returns:** `Matrix3x2fStack`

### getRenderContext()

```java
public RenderContext getRenderContext()
```

**Returns:** [RenderContext](/client/api/render/RenderContext.md)

### getGraphics()

```java
public GuiGraphics getGraphics()
```

**Returns:** `GuiGraphics`

### getStage()

```java
public Stage getStage()
```

TODO: documentation
**Returns**: PRE, ON, OR POST



**Returns:** `Stage`

