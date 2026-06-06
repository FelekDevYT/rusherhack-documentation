# WindowContent

**Package:** `org.rusherhack.client.api.ui.window.content`

**Source:** `org/rusherhack/client/api/ui/window/content/WindowContent.java`

Content that can be rendered inside of a Window
* **Author:** John200410



## Overview

`WindowContent` is a class and implements [IClickable](/core/interfaces/IClickable.md), [ITypeable](/core/interfaces/ITypeable.md), [IScrollable](/core/interfaces/IScrollable.md), [ITickable](/core/interfaces/ITickable.md).

## Constructor

```java
public WindowContent(Window window)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| window | [Window](/client/api/feature/window/Window.md) | protected final |
| x | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| y | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| contextMenu | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[ContextAction](/client/api/ui/window/context/ContextAction.md)&gt; | protected |


## Methods

### renderContent()

```java
public abstract void renderContent(double mouseX, double mouseY, WindowView parent)
```

### getWidth()

```java
public abstract double getWidth()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getHeight()

```java
public abstract double getHeight()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getContextMenu()

```java
public List<ContextAction> getContextMenu()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[ContextAction](/client/api/ui/window/context/ContextAction.md)&gt;

### setContextMenu()

```java
public void setContextMenu(List<ContextAction> contextMenu)
```

### unfocus()

```java
public void unfocus()
```

Called when the window loses focus. Should be used to unfocus things like text fields

### getWindow()

```java
public Window getWindow()
```

**Returns:** [Window](/client/api/feature/window/Window.md)

### isHovered()

```java
public boolean isHovered(double mouseX, double mouseY)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setX()

```java
public double setX(double x)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### setY()

```java
public double setY(double y)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getX()

```java
public double getX()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getY()

```java
public double getY()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getRenderer()

```java
public IRenderer2D getRenderer()
```

**Returns:** [IRenderer2D](/client/api/render/IRenderer2D.md)

### getFontRenderer()

```java
public IFontRenderer getFontRenderer()
```

**Returns:** [IFontRenderer](/client/api/render/font/IFontRenderer.md)

