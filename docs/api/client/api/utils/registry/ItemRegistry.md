# ItemRegistry

**Package:** `org.rusherhack.client.api.utils.registry`

**Source:** `org/rusherhack/client/api/utils/registry/ItemRegistry.java`

**Author:** john@rusherhack.org 12/18/2025



## Overview

`ItemRegistry` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| ITEMS | [Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html), `Item`&gt; | public static final |
| WILD_CARDS | [HashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[], `Item`[]&gt; | public static final |


## Methods

### getItems()

```java
public static Item[] getItems(String query)
```

**Returns**: an array of items which exactly match the search query



**Returns:** `Item`[]

### findItems()

```java
public static Item[] findItems(String query)
```

**Returns**: an array of items which contain the search query



**Returns:** `Item`[]

### getID()

```java
public static String getID(Item item)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

