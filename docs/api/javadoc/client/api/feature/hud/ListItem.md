# ListItem

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/api/javadoc/client/api/feature/hud/ListHudElement.java`

An item that gets rendered in this list
* **Author:** John200410 12/14/2021



## Overview

`ListItem` is a class.

## Constructor

```java
public ListItem(ListHudElement parent)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| parent | [ListHudElement](/api/javadoc/client/api/feature/hud/ListHudElement.md) | private final |
| animation | [Animation](/api/javadoc/core/animation/Animation.md) | private final |
| markedForRemoval | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| cachedComponent | `Component` | private |
| cachedWidth | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |


## Methods

### getText()

```java
public abstract Component getText()
```

**Returns**: The text that will represent this item



**Returns:** `Component`

### shouldRemove()

```java
public abstract boolean shouldRemove()
```

**Returns**: the condition that must be met to remove this item



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getTextCached()

```java
private Component getTextCached()
```

**Returns:** `Component`

### readyForRemoval()

```java
private boolean readyForRemoval()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getHeight()

```java
public double getHeight()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getWidth()

```java
public double getWidth()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### render()

```java
public void render(RenderContext renderContext, int indexInList)
```

### tick()

```java
public void tick()
```

Updates the animation state of this item

### toString()

```java
public String toString()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### equals()

```java
public boolean equals(Object obj)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getColor()

```java
public int getColor(int index)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getAnimation()

```java
public Animation getAnimation()
```

**Returns:** [Animation](/api/javadoc/core/animation/Animation.md)

### getRenderer()

```java
public IRenderer2D getRenderer()
```

**Returns:** [IRenderer2D](/api/javadoc/client/api/render/IRenderer2D.md)

### getFontRenderer()

```java
public IFontRenderer getFontRenderer()
```

**Returns:** [IFontRenderer](/api/javadoc/client/api/render/font/IFontRenderer.md)

### getParent()

```java
public ListHudElement getParent()
```

**Returns:** [ListHudElement](/api/javadoc/client/api/feature/hud/ListHudElement.md)

