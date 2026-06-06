# ParagraphComponent

**Package:** `org.rusherhack.client.api.ui.window.content.component`

**Source:** `org/rusherhack/client/api/ui/window/content/component/ParagraphComponent.java`

A TextContent with line wrapping
* **Author:** John200410



## Overview

`ParagraphComponent` is a class that extends [TextComponent](/client/api/ui/window/content/component/TextComponent.md).

## Constructor

```java
public ParagraphComponent(Window window)
```

```java
public ParagraphComponent(Window window, String text)
```

```java
public ParagraphComponent(Window window, String text, double lineSpacing)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| lineSpacing | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| parent | [WindowView](/client/api/ui/window/view/WindowView.md) | protected |
| heightCache | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | protected |
| color | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | protected |


## Methods

### renderContent()

```java
public void renderContent(double mouseX, double mouseY, WindowView parent)
```

### getWidth()

```java
public double getWidth()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getHeight()

```java
public double getHeight()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### updateHeight()

```java
public void updateHeight()
```

### setLineSpacing()

```java
public void setLineSpacing(double lineSpacing)
```

### setColor()

```java
public void setColor(int color)
```

