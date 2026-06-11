# PanelItemBase

**Package:** `org.rusherhack.client.api.ui.panel`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/panel/PanelItemBase.java`

**Author:** John200410 12/21/2022



## Overview

`PanelItemBase` is a class and implements [IPanelItem](/api/javadoc/client/api/ui/panel/IPanelItem.md).

## Constructor

```java
public PanelItemBase(PanelBase<?> panel, T parent)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| panel | [PanelBase](/api/javadoc/client/api/ui/panel/PanelBase.md)&lt;`?`&gt; | protected final |
| parent | `T` | protected final |
| subItems | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt; | protected final |


## Methods

### addSubItem()

```java
public void addSubItem(T item)
```

### getSubItemList()

```java
public List<T> getSubItemList()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt;

### getPanel()

```java
public PanelBase<?> getPanel()
```

**Returns:** [PanelBase](/api/javadoc/client/api/ui/panel/PanelBase.md)&lt;`?`&gt;

### getParent()

```java
public T getParent()
```

**Returns:** `T`

