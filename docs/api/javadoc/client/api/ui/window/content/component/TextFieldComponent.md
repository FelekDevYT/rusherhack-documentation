# TextFieldComponent

**Package:** `org.rusherhack.client.api.ui.window.content.component`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/window/content/component/TextFieldComponent.java`

## Overview

`TextFieldComponent` is a class that extends [WindowContent](/api/javadoc/client/api/ui/window/content/WindowContent.md).

## Constructor

```java
public TextFieldComponent(Window window, double width)
```

```java
public TextFieldComponent(Window window, String label, double width)
```

```java
public TextFieldComponent(Window window, String label, double width, boolean censored)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| textField | [TextField](/api/javadoc/client/api/utils/objects/TextField.md) | protected final |
| label | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| censored | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |
| focused | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| inputDelay | [Timer](/api/javadoc/core/utils/Timer.md) | private final |
| width | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| heightRatio | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |
| cursorBlinkTimer | [Timer](/api/javadoc/core/utils/Timer.md) | private final |
| blink | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| returnCallback | [Consumer](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Consumer.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt; | private |


## Methods

### renderContent()

```java
public void renderContent(double mouseX, double mouseY, WindowView parent)
```

### unfocus()

```java
public void unfocus()
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

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getLabel()

```java
public String getLabel()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setLabel()

```java
public void setLabel(String label)
```

### getValue()

```java
public String getValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setValue()

```java
public void setValue(String value)
```

### setWidth()

```java
public void setWidth(double width)
```

### setReturnCallback()

```java
public void setReturnCallback(Consumer<String> returnCallback)
```

### setCharacterFilter()

```java
public void setCharacterFilter(Predicate<Character> characterFilter)
```

### isFocused()

```java
public boolean isFocused()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setFocused()

```java
public void setFocused(boolean focused)
```

### getTextField()

```java
public TextField getTextField()
```

**Returns:** [TextField](/api/javadoc/client/api/utils/objects/TextField.md)

