# WindowContentHandlerBase

**Package:** `org.rusherhack.client.api.ui.window`

**Source:** `org/rusherhack/client/api/ui/window/WindowContentHandlerBase.java`

## Overview

`WindowContentHandlerBase` is a class.

## Methods

### handleMouseClicked()

```java
public boolean handleMouseClicked(WindowContent content, double mouseX, double mouseY, int button, WindowView view)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### handleRenderContent()

```java
public void handleRenderContent(WindowContent content, double mouseX, double mouseY, WindowView view)
```

### renderButton()

```java
public abstract void renderButton(ButtonComponent button, double mouseX, double mouseY, WindowView view)
```

### renderCheckBox()

```java
public abstract void renderCheckBox(CheckBoxComponent checkBox, double mouseX, double mouseY, WindowView view)
```

### renderComboBox()

```java
public abstract void renderComboBox(ComboBoxComponent dropdown, double mouseX, double mouseY, WindowView view)
```

### renderTextField()

```java
public abstract void renderTextField(TextFieldComponent textField, double mouseX, double mouseY, WindowView view)
```

### renderListItem()

```java
public abstract void renderListItem(ListItemContent listItem, double mouseX, double mouseY, WindowView view)
```

