# SplitView

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/window/view/SplitView.java`

**Author:** john@rusherhack.org 12/23/2025



## Overview

`SplitView` is a class that extends [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md).

## Constructor

```java
public SplitView(Window window, WindowView left, WindowView right)
```

```java
public SplitView(String name, Window window, WindowView left, WindowView right)
```

```java
public SplitView(String name, Window window, WindowView left, WindowView center, double centerWidth, WindowView right)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| PADDING | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private static final |
| left | [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md) | private |
| center | [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md) | private |
| right | [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md) | private |
| centerWidth | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |


## Methods

### renderViewContent()

```java
public void renderViewContent(double mouseX, double mouseY)
```

