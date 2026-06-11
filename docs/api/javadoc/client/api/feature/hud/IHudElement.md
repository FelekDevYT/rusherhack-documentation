# IHudElement

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/api/javadoc/client/api/feature/hud/IHudElement.java`

Hud element interface
* **Author:** John200410 3/6/2023



## Overview

`IHudElement` is a interface that extends [IFeatureConfigurable](/api/javadoc/core/feature/IFeatureConfigurable.md), [IRenderable2D](/api/javadoc/client/api/render/IRenderable2D.md), [IToggleable](/api/javadoc/core/interfaces/IToggleable.md), [ITickable](/api/javadoc/core/interfaces/ITickable.md), [IDraggable](/api/javadoc/core/interfaces/IDraggable.md), [JsonSerializable](/api/javadoc/core/serialize/JsonSerializable.md).

## Methods

### renderContent()

```java
default void renderContent(RenderContext context, int mouseX, int mouseY)
```

DEPRECATED! Override ``#renderContent(RenderContext, double, double) instead.

### renderContent()

```java
default void renderContent(RenderContext context, double mouseX, double mouseY)
```

Hud element is being called for rendering.



Matrix is translated to the top left corner of the element before being called.

### shouldDrawBackground()

```java
default boolean shouldDrawBackground()
```

**Returns**: whether the background should be drawn



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

