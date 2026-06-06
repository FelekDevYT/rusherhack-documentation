# WindowViewHandlerBase

**Package:** `org.rusherhack.client.api.ui.window`

**Source:** `org/rusherhack/client/api/ui/window/WindowViewHandlerBase.java`

## Overview

`WindowViewHandlerBase` is a class.

## Constructor

```java
public WindowViewHandlerBase(WindowHandlerBase windowHandler)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| windowHandler | [WindowHandlerBase](/client/api/ui/window/WindowHandlerBase.md) | protected final |


## Methods

### handleRenderViewContent()

```java
public void handleRenderViewContent(WindowView view, double mouseX, double mouseY)
```

Wrapper for [WindowView](/client/api/ui/window/view/WindowView.md)#renderViewContent(double, double) so custom things can be added
* **Parameter `view`**: @param mouseX


@param mouseY

### handleViewMouseClicked()

```java
public boolean handleViewMouseClicked(WindowView view, double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

