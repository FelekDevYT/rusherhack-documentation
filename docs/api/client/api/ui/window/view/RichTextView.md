# RichTextView

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/client/api/ui/window/view/RichTextView.java`

A scrollable view meant for displaying logs



TODO: add selection copying
* **Author:** John200410 11/22/2023



## Overview

`RichTextView` is a class that extends [ScrollableView](/client/api/ui/window/view/ScrollableView.md).

## Constructor

```java
public RichTextView(Window window)
```

```java
public RichTextView(String name, Window window)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| textComponents | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[RichTextComponent](/client/api/ui/window/view/RichTextComponent.md)&gt; | private final |
| queue | [Queue](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html)&lt;[RichTextComponent](/client/api/ui/window/view/RichTextComponent.md)&gt; | private final |


## Methods

### add()

```java
public void add(String text, int color)
```

### add()

```java
public void add(Component text, int color)
```

### renderViewContent()

```java
public void renderViewContent(double mouseX, double mouseY)
```

### clear()

```java
public void clear()
```

### shouldAutoJumpToBottom()

```java
protected boolean shouldAutoJumpToBottom()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### newComponent()

```java
protected void newComponent(RichTextComponent c, int color)
```

