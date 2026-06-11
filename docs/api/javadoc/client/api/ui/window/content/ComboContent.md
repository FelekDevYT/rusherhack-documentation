# ComboContent

**Package:** `org.rusherhack.client.api.ui.window.content`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/window/content/ComboContent.java`

Content that bundles two or more other contents.



Useful for situations like when you need a text field and a button to be next to each other.



(this probably needs to be rewritten)
* **Author:** John200410



## Overview

`ComboContent` is a class that extends [WindowContent](/api/javadoc/client/api/ui/window/content/WindowContent.md).

## Constructor

```java
public ComboContent(Window window)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| contents | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Pair<WindowContent`, `AnchorSide>`&gt; | private final |
| parent | [WindowView](/api/javadoc/client/api/ui/window/view/WindowView.md) | private |


## Methods

### addContent()

```java
public void addContent(WindowContent content)
```

### addContent()

```java
public void addContent(WindowContent content, AnchorSide anchor)
```

### renderContent()

```java
public void renderContent(double mouseX, double mouseY, WindowView parent)
```

this can definitely be done better but my adhd meds wore off and this works good enough

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

### unfocus()

```java
public void unfocus()
```

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

### getContents()

```java
public List<Pair<WindowContent, AnchorSide>> getContents()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Pair<WindowContent`, `AnchorSide>`&gt;

