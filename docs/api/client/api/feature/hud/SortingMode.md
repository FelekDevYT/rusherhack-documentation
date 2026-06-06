# SortingMode

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/client/api/feature/hud/ListHudElement.java`

## Overview

`SortingMode` is a enum.

## Constructor

```java
 SortingMode(Comparator<ListItem> comparator)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| comparator | [Comparator](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html)&lt;[ListItem](/client/api/feature/hud/ListItem.md)&gt; | public final |


## Constants

### LEXICOGRAPHICAL

Arguments: Comparator.comparingDouble(m -> -m.getWidth())

### ALPHABETICAL

Arguments: Comparator.comparing(ListItem::toString)

