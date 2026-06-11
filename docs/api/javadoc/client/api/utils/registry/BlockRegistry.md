# BlockRegistry

**Package:** `org.rusherhack.client.api.utils.registry`

**Source:** `org/rusherhack/api/javadoc/client/api/utils/registry/BlockRegistry.java`

**Author:** john@rusherhack.org 12/18/2025



## Overview

`BlockRegistry` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| BLOCKS | [Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html), `Block`&gt; | public static final |
| WILD_CARDS | [HashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[], `Block`[]&gt; | public static final |


## Methods

### getBlocks()

```java
public static Block[] getBlocks(String query)
```

**Returns**: an array of blocks which exactly match the search query



**Returns:** `Block`[]

### findBlocks()

```java
public static Block[] findBlocks(String query)
```

**Returns**: an array of blocks which contain the search query



**Returns:** `Block`[]

### getID()

```java
public static String getID(Block block)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

