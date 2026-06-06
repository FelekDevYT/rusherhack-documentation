# IPanelItem

**Package:** `org.rusherhack.client.api.ui.panel`

**Source:** `org/rusherhack/client/api/ui/panel/IPanelItem.java`

TODO: is this even needed

## Overview

`IPanelItem` is a interface that extends [IRenderable2D](/client/api/render/IRenderable2D.md), [IClickable](/core/interfaces/IClickable.md), [ITypeable](/core/interfaces/ITypeable.md).

## Methods

### getWidth()

```java
 double getWidth()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getHeight()

```java
 double getHeight(boolean total)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### isHovered()

```java
 boolean isHovered(double mouseX, double mouseY, boolean includeSubItems)
```

Alternative for ``#isHovered(double, double)
* **Parameter `mouseX`**: mouse x position


**Parameter `mouseY`**: mouse y position


**Parameter `includeSubItems`**: whether or not to include sub items in height calculation


**Returns**: whether or not the mouse is hovering over this item



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isHovered()

```java
default boolean isHovered(double mouseX, double mouseY)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isVisible()

```java
default boolean isVisible()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

