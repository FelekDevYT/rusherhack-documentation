# ResizeableWindow

**Package:** `org.rusherhack.client.api.feature.window`

**Source:** `org/rusherhack/api/javadoc/client/api/feature/window/ResizeableWindow.java`

A resizeable window
* **Author:** John200410



## Overview

`ResizeableWindow` is a class that extends [PinnableWindow](/api/javadoc/client/api/feature/window/PinnableWindow.md).

## Constructor

```java
public ResizeableWindow(String title, double width, double height)
```

```java
public ResizeableWindow(String title, double x, double y, double width, double height)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| minWidth | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| minHeight | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| maxWidth | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| maxHeight | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| resizing | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| resizeDeltaX | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| resizeDeltaY | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |


## Methods

### mouseClicked()

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

### mouseMoved()

```java
public void mouseMoved(double mouseX, double mouseY)
```

### setResizing()

```java
public void setResizing(boolean resizing, double resizeDeltaX, double resizeDeltaY)
```

### setMaxWidth()

```java
public void setMaxWidth(double maxWidth)
```

### setMaxHeight()

```java
public void setMaxHeight(double maxHeight)
```

### setMinWidth()

```java
public void setMinWidth(double minWidth)
```

### setMinHeight()

```java
public void setMinHeight(double minHeight)
```

### isResizing()

```java
public boolean isResizing()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### serialize()

```java
public JsonElement serialize()
```

**Returns:** `JsonElement`

### deserialize()

```java
public boolean deserialize(JsonElement jsonElement)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

