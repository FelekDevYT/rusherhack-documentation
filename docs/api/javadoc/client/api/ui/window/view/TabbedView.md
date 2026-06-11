# TabbedView

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/window/view/TabbedView.java`

A view with different tabs.
WindowViews in the content list are rendered in tabs, while other content is rendered at the bottom below the tab view.
* **Author:** John200410



## Overview

`TabbedView` is a class that extends [SimpleView](/api/javadoc/client/api/ui/window/view/SimpleView.md).

## Constructor

```java
public TabbedView(Window window, List<WindowContent> contentList)
```

```java
public TabbedView(String name, Window window, List<WindowContent> contentList)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| activeTabView | [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md) | private |


## Methods

### renderViewContent()

```java
public void renderViewContent(double mouseX, double mouseY)
```

tabview rendering should be handled in the WindowViewHandler

### getContent()

```java
public List<WindowContent> getContent()
```

**Returns**: list of persistent content that should be rendered below the tab view



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[WindowContent](/api/javadoc/client/api/ui/window/content/WindowContent.md)&gt;

### setActiveTabView()

```java
public void setActiveTabView(WindowView activeTabView)
```

### getActiveTabView()

```java
public WindowView getActiveTabView()
```

**Returns:** [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md)

### getTabs()

```java
public List<WindowView> getTabs()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md)&gt;

### getTabViewHeight()

```java
public double getTabViewHeight()
```

this isnt accurate its just used as a guide to know where persistent content should be rendered

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getPersistentContentHeight()

```java
public double getPersistentContentHeight()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getTopOffset()

```java
protected double getTopOffset()
```

render the persistent content below the tab view

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getLeftOffset()

```java
protected double getLeftOffset()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

