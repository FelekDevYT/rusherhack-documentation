# IWindowManager

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/api/javadoc/client/api/system/IWindowManager.java`

**Author:** John200410



## Overview

`IWindowManager` is a interface that extends [IFeatureManager](/api/javadoc/core/feature/IFeatureManager.md).

## Methods

### moveToTop()

```java
 void moveToTop(Window window)
```

Moves the window to the top.
* @param window

### popupWindow()

```java
 void popupWindow(Window window)
```

### closePopup()

```java
 void closePopup(Window window)
```

### getRenderer()

```java
 IRenderer2D getRenderer()
```

**Returns:** [IRenderer2D](/api/javadoc/client/api/render/IRenderer2D.md)

### getFontRenderer()

```java
 IFontRenderer getFontRenderer()
```

**Returns:** [IFontRenderer](/api/javadoc/client/api/render/font/IFontRenderer.md)

### getWindowHandler()

```java
 WindowHandlerBase getWindowHandler()
```

**Returns:** [WindowHandlerBase](/api/javadoc/client/api/ui/window/WindowHandlerBase.md)

### getFocusedWindow()

```java
default Window getFocusedWindow()
```

**Returns:** [Window](/api/javadoc/client/api/feature/window/Window.md)

### getVisibleWindows()

```java
default List<Window> getVisibleWindows()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Window](/api/javadoc/client/api/feature/window/Window.md)&gt;

