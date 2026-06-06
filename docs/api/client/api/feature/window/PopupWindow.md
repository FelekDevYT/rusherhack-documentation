# PopupWindow

**Package:** `org.rusherhack.client.api.feature.window`

**Source:** `org/rusherhack/client/api/feature/window/PopupWindow.java`

A popup window which is meant to be created as a child of another window.
* **Author:** John200410



## Overview

`PopupWindow` is a class that extends [Window](/client/api/feature/window/Window.md).

## Constructor

```java
public PopupWindow(String title, Window parent, double width, double height)
```

Constructs a new PopupWindow with the specified title, parent window, and size. The position of the popup window is centered relative to the parent
window.
* **Parameter `title`**: the title of the popup window


**Parameter `parent`**: the parent window of the popup window


**Parameter `width`**: the width of the popup window


**Parameter `height`**: the height of the popup window



## Fields

| Name | Type | Modifiers |
|------|------|----------|
| content | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[WindowContent](/client/api/ui/window/content/WindowContent.md)&gt; | protected final |
| rootView | [WindowView](/client/api/ui/window/view/WindowView.md) | protected |


## Methods

### addContent()

```java
public void addContent(WindowContent content)
```

Adds a WindowContent to the content list of this popup window.
* **Parameter `content`**: the WindowContent to be added



### getRootView()

```java
public WindowView getRootView()
```

**Returns:** [WindowView](/client/api/ui/window/view/WindowView.md)

### onClose()

```java
public void onClose()
```

### shouldSerialize()

```java
public boolean shouldSerialize(boolean autosave)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

