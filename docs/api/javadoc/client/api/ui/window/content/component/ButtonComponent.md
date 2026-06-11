# ButtonComponent

**Package:** `org.rusherhack.client.api.ui.window.content.component`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/window/content/component/ButtonComponent.java`

TODO: create interface so that ComboContent can modify width as needed
* **Author:** John200410



## Overview

`ButtonComponent` is a class that extends [WindowContent](/api/javadoc/client/api/ui/window/content/WindowContent.md) and implements [INamed](/api/javadoc/core/interfaces/INamed.md).

## Constructor

```java
public ButtonComponent(Window window, String label, Runnable clickAction)
```

```java
public ButtonComponent(Window window, String label, double width, double height, Runnable clickAction)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| label | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| width | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| height | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| enabledPredicate | [Predicate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html)&lt;[ButtonComponent](/api/javadoc/client/api/ui/window/content/component/ButtonComponent.md)&gt; | private |
| pressed | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| clickAction | [Runnable](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runnable.html) | private |


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

### setWidth()

```java
public void setWidth(double width)
```

### setHeight()

```java
public void setHeight(double height)
```

### mouseClicked()

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

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

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setLabel()

```java
public void setLabel(String name)
```

### setAction()

```java
public void setAction(Runnable action)
```

### onClick()

```java
public void onClick()
```

### isPressed()

```java
public boolean isPressed()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setPressed()

```java
public void setPressed(boolean pressed)
```

### setPredicate()

```java
public void setPredicate(Predicate<ButtonComponent> enabledPredicate)
```

### isEnabled()

```java
public boolean isEnabled()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

