# RichTextComponent

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/client/api/ui/window/view/RichTextView.java`

## Overview

`RichTextComponent` is a class that extends [ParagraphComponent](/client/api/ui/window/content/component/ParagraphComponent.md).

## Constructor

```java
public RichTextComponent(Window window, String str)
```

```java
public RichTextComponent(Window window, Component component)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| component | `Component` | private final |


## Methods

### renderContent()

```java
public void renderContent(double mouseX, double mouseY, WindowView parent)
```

### getContextMenu()

```java
public List<ContextAction> getContextMenu()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[ContextAction](/client/api/ui/window/context/ContextAction.md)&gt;

