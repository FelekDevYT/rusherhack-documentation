# WindowHandlerBase

**Package:** `org.rusherhack.client.api.ui.window`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/window/WindowHandlerBase.java`

**Author:** John200410



## Overview

`WindowHandlerBase` is a class that extends [ElementHandlerBase](/api/javadoc/client/api/ui/ElementHandlerBase.md).

## Constructor

```java
public WindowHandlerBase()
```

## Methods

### getViewHandler()

```java
public abstract WindowViewHandlerBase getViewHandler()
```

Returns the view handler of this window handler.
* **Returns**: the view handler of this window handler



**Returns:** [WindowViewHandlerBase](/api/javadoc/client/api/ui/window/WindowViewHandlerBase.md)

### getContentHandler()

```java
public abstract WindowContentHandlerBase getContentHandler()
```

Returns the content handler of this window handler.
* **Returns**: the content handler of this window handler



**Returns:** [WindowContentHandlerBase](/api/javadoc/client/api/ui/window/WindowContentHandlerBase.md)

### renderWindowFrame()

```java
public abstract void renderWindowFrame(Window window, double mouseX, double mouseY)
```

Renders the frame of a window.
* **Parameter `window`**: the window


**Parameter `mouseX`**: the x-coordinate of the mouse


**Parameter `mouseY`**: the y-coordinate of the mouse



### getFramePadding()

```java
public abstract int getFramePadding(WindowSide side)
```

Returns the frame padding of a side of a window.
* **Parameter `side`**: the side of the window


**Returns**: the frame padding of the side



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### moveElementToTop()

```java
public void moveElementToTop(Window element)
```

### getElements()

```java
public List<Window> getElements()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Window](/api/javadoc/client/api/feature/window/Window.md)&gt;

### renderElements()

```java
public void renderElements(RenderContext context, double mouseX, double mouseY)
```

### renderElement()

```java
protected void renderElement(Window window, RenderContext context, double mouseX, double mouseY)
```

### tick()

```java
public void tick()
```

### consumeMouseClick()

```java
protected boolean consumeMouseClick(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeElementMouseClick()

```java
protected boolean consumeElementMouseClick(Window window, double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeMouseRelease()

```java
protected void consumeMouseRelease(double mouseX, double mouseY, int button)
```

### consumeElementMouseRelease()

```java
protected boolean consumeElementMouseRelease(Window window, double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeMouseMove()

```java
protected void consumeMouseMove(double mouseX, double mouseY)
```

### charTyped()

```java
public boolean charTyped(char character)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### keyTyped()

```java
public boolean keyTyped(int key, int scanCode, int modifiers)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isElementHovered()

```java
public boolean isElementHovered(Window window, double mouseX, double mouseY)
```

Checks if a window is hovered. Can be overridden to change the hover behavior.
* **Parameter `window`**: the window


**Parameter `mouseX`**: the x-coordinate of the mouse


**Parameter `mouseY`**: the y-coordinate of the mouse


**Returns**: true if the window is hovered



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getWindowColor()

```java
public Color getWindowColor(Window window)
```

Returns the primary color of a window.
* **Parameter `window`**: the window


**Returns**: the color of the window



**Returns:** `Color`

### initialize()

```java
public void initialize()
```

unused for now

### setDefaultPositions()

```java
public void setDefaultPositions()
```

unused for now

