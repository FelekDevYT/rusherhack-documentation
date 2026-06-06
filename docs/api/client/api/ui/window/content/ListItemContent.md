# ListItemContent

**Package:** `org.rusherhack.client.api.ui.window.content`

**Source:** `org/rusherhack/client/api/ui/window/content/ListItemContent.java`

## Overview

`ListItemContent` is a class that extends [WindowContent](/client/api/ui/window/content/WindowContent.md).

## Constructor

```java
public ListItemContent(Window window, ListView<?> listView)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| listView | [ListView](/client/api/ui/window/view/ListView.md)&lt;`?`&gt; | protected final |
| timeSinceLastClick | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private |


## Methods

### getAsString()

```java
public abstract String getAsString(ListView<?>.Column column)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### isSelected()

```java
public boolean isSelected()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

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

### mouseClicked()

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseScrolled()

```java
public boolean mouseScrolled(double mouseX, double mouseY, double delta)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### charTyped()

```java
public boolean charTyped(char character)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### keyTyped()

```java
public boolean keyTyped(int key, int scanCode, int modifiers)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### onDoubleClick()

```java
protected void onDoubleClick()
```

### getListView()

```java
public ListView<?> getListView()
```

**Returns:** [ListView](/client/api/ui/window/view/ListView.md)&lt;`?`&gt;

