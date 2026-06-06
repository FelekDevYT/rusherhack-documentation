# ResizeableHudElement

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/client/api/feature/hud/ResizeableHudElement.java`

Hud element which can be scaled.
TODO: make dragging show dragging mouse cursor
* **Author:** John200410 5/29/2023



## Overview

`ResizeableHudElement` is a class that extends [HudElement](/client/api/feature/hud/HudElement.md).

## Constructor

```java
public ResizeableHudElement(String name)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| resizing | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| resizeStartScale | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| resizeDeltaX | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| resizeDeltaY | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| scale | [NumberSetting](/core/setting/NumberSetting.md)&lt;[Double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)&gt; | protected final |


## Methods

### mouseMoved()

```java
public void mouseMoved(double mouseX, double mouseY)
```

### mouseClicked()

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

### getScale()

```java
public double getScale()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### render()

```java
public void render(RenderContext context, double mouseX, double mouseY)
```

### shouldUpdateAlignment()

```java
public boolean shouldUpdateAlignment()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isHoveredOverIndicator()

```java
public boolean isHoveredOverIndicator(double mouseX, double mouseY)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isResizing()

```java
public boolean isResizing()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

