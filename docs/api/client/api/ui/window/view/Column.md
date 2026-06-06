# Column

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/client/api/ui/window/view/ListView.java`

A column in a list view

## Overview

`Column` is a class and implements [INamed](/core/interfaces/INamed.md).

## Constructor

```java
public Column(String name)
```

```java
public Column(String name, double widthWeight)
```

```java
public Column(String name, Comparator<T> comparator, double widthWeight)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| comparator | [Comparator](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html)&lt;`T`&gt; | private |
| widthWeight | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |


## Methods

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getComparator()

```java
public Comparator<T> getComparator()
```

**Returns:** [Comparator](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html)&lt;`T`&gt;

### setComparator()

```java
public void setComparator(Comparator<T> comparator)
```

