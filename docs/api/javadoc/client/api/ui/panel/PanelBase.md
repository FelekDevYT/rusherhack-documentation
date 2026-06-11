# PanelBase

**Package:** `org.rusherhack.client.api.ui.panel`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/panel/PanelBase.java`

Basic panel element that with items that can be clicked
* **Author:** John200410 12/17/2022



## Overview

`PanelBase` is a class that extends [ScaledElementBase](/api/javadoc/client/api/ui/ScaledElementBase.md) and implements [IRenderable2D](/api/javadoc/client/api/render/IRenderable2D.md), [ITickable](/api/javadoc/core/interfaces/ITickable.md), [IClickable](/api/javadoc/core/interfaces/IClickable.md), [IScrollable](/api/javadoc/core/interfaces/IScrollable.md), [ITypeable](/api/javadoc/core/interfaces/ITypeable.md), [IHideable](/api/javadoc/core/interfaces/IHideable.md), [JsonSerializable](/api/javadoc/core/serialize/JsonSerializable.md), [INamed](/api/javadoc/core/interfaces/INamed.md), [IReferenceable](/api/javadoc/core/interfaces/IReferenceable.md).

## Constructor

```java
public PanelBase(PanelHandlerBase<? extends PanelBase<T>> handler, String name)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| displayName | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| visible | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| items | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt; | protected final |
| handler | [PanelHandlerBase](/api/javadoc/client/api/ui/panel/PanelHandlerBase.md) | protected final |


## Methods

### createFeatureItem()

```java
public abstract T createFeatureItem(IFeature feature)
```

Instantiates a new item for the given feature
* **Parameter `feature`**: likely a module or hud element


**Returns**: the item



**Returns:** `T`

### addItem()

```java
public T addItem(T item)
```

**Returns:** `T`

### addItem()

```java
public T addItem(IFeature feature)
```

**Returns:** `T`

### getItemList()

```java
public List<T> getItemList()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt;

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDisplayName()

```java
public String getDisplayName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setDisplayName()

```java
public void setDisplayName(String displayName)
```

### getPanelHandler()

```java
public PanelHandlerBase getPanelHandler()
```

**Returns:** [PanelHandlerBase](/api/javadoc/client/api/ui/panel/PanelHandlerBase.md)

### isHidden()

```java
public boolean isHidden()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setVisible()

```java
public void setVisible(boolean visible)
```

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

### serialize()

```java
public JsonElement serialize()
```

**Returns:** `JsonElement`

### deserialize()

```java
public boolean deserialize(JsonElement obj)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### sort()

```java
public void sort()
```

i was gonna make this method abstract but i didnt wanna break compatibility with existing themes

### getReferenceKey()

```java
public String getReferenceKey()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

