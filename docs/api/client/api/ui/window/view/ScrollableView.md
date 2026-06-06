# ScrollableView

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/client/api/ui/window/view/ScrollableView.java`

## Overview

`ScrollableView` is a class that extends [SimpleView](/client/api/ui/window/view/SimpleView.md).

## Constructor

```java
public ScrollableView(Window window, List<? extends WindowContent> contentList)
```

```java
public ScrollableView(String name, Window window, List<? extends WindowContent> contentList)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| isDraggingScrollbarGrip | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| dragDeltaY | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | public |
| prevMax | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| scrollbar | [Scrollbar](/client/api/utils/objects/Scrollbar.md) | protected final |


## Methods

### renderViewContent()

```java
public void renderViewContent(double mouseX, double mouseY)
```

### shouldAutoJumpToBottom()

```java
protected boolean shouldAutoJumpToBottom()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseScrolled()

```java
public boolean mouseScrolled(double mouseX, double mouseY, double delta)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

### getTopOffset()

```java
protected double getTopOffset()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### canScroll()

```java
public boolean canScroll()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setDraggingGrip()

```java
public void setDraggingGrip(boolean dragging, double dragDeltaY)
```

### getScrollbar()

```java
public Scrollbar getScrollbar()
```

**Returns:** [Scrollbar](/client/api/utils/objects/Scrollbar.md)

### getContentHeight()

```java
public double getContentHeight()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### isDraggingScrollbarGrip()

```java
public boolean isDraggingScrollbarGrip()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### scrollToTop()

```java
public void scrollToTop()
```

### scrollToBottom()

```java
public void scrollToBottom()
```

