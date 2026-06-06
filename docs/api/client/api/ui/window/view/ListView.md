# ListView

**Package:** `org.rusherhack.client.api.ui.window.view`

**Source:** `org/rusherhack/client/api/ui/window/view/ListView.java`

**Author:** John200410



## Overview

`ListView` is a class that extends [WindowView](/client/api/ui/window/view/WindowView.md).

## Constructor

```java
public ListView(String name, Window window, List<T> items)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| itemView | [ListItemView](/client/api/ui/window/view/ListItemView.md) | protected final |
| items | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt; | protected final |
| columns | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Column](/client/api/ui/window/view/Column.md)&gt; | protected final |
| sortColumn | [Column](/client/api/ui/window/view/Column.md) | protected |
| sortAscending | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| selectedItem | `T` | protected |
| deleteCallback | [Consumer](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Consumer.html)&lt;`T`&gt; | protected |


## Methods

### renderViewContent()

```java
public void renderViewContent(double mouseX, double mouseY)
```

### sortByColumn()

```java
public void sortByColumn(ListView<?>.Column column)
```

### resort()

```java
public void resort()
```

### getColumns()

```java
public List<Column> getColumns()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Column](/client/api/ui/window/view/Column.md)&gt;

### getColumnWidth()

```java
public double getColumnWidth(ListView<?>.Column column)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getSortColumn()

```java
public Column getSortColumn()
```

**Returns:** [Column](/client/api/ui/window/view/Column.md)

### isSortAscending()

```java
public boolean isSortAscending()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getSelectedItem()

```java
public T getSelectedItem()
```

**Returns:** `T`

### setSelectedItem()

```java
public void setSelectedItem(ListItemContent selectedItem)
```

### addColumn()

```java
public Column addColumn(String name)
```

**Returns:** [Column](/client/api/ui/window/view/Column.md)

### addColumn()

```java
public Column addColumn(String name, double widthWeight)
```

**Returns:** [Column](/client/api/ui/window/view/Column.md)

### addColumn()

```java
public Column addColumn(String name, Comparator<T> comparator, double widthWeight)
```

**Returns:** [Column](/client/api/ui/window/view/Column.md)

### getItemView()

```java
public ListItemView getItemView()
```

**Returns:** [ListItemView](/client/api/ui/window/view/ListItemView.md)

### setDeleteCallback()

```java
public void setDeleteCallback(Consumer<T> deleteCallback)
```

