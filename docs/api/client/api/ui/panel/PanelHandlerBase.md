# PanelHandlerBase

**Package:** `org.rusherhack.client.api.ui.panel`

**Source:** `org/rusherhack/client/api/ui/panel/PanelHandlerBase.java`

**Author:** John200410 1/13/2023



## Overview

`PanelHandlerBase` is a class that extends [ElementHandlerBase](/client/api/ui/ElementHandlerBase.md).

## Constructor

```java
public PanelHandlerBase(boolean scaledWithMinecraftGui)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| panels | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt; | protected final |


## Methods

### createPanel()

```java
public abstract T createPanel(String name)
```

Instantiates a panel with the given name
* **Parameter `name`**: The name of the panel


**Returns**: The panel



**Returns:** `T`

### addPanel()

```java
public void addPanel(T panel)
```

Adds a panel to the list of panels
* @param panel

### moveElementToTop()

```java
public void moveElementToTop(T element)
```

### getElements()

```java
public List<T> getElements()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt;

### getFontRenderer()

```java
public IFontRenderer getFontRenderer()
```

**Returns:** [IFontRenderer](/client/api/render/font/IFontRenderer.md)

