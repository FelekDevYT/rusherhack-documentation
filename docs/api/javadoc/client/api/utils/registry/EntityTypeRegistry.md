# EntityTypeRegistry

**Package:** `org.rusherhack.client.api.utils.registry`

**Source:** `org/rusherhack/api/javadoc/client/api/utils/registry/EntityTypeRegistry.java`

**Author:** john@rusherhack.org 12/24/2025



## Overview

`EntityTypeRegistry` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| ENTITY_TYPES | [Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html), `EntityType`&lt;`?`&gt;&gt; | public static final |
| WILD_CARDS | [HashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[], `EntityType`&lt;`?`&gt;[]&gt; | public static final |


## Methods

### getEntityTypes()

```java
public static EntityType<?>[] getEntityTypes(String query)
```

**Returns**: an array of entity types which exactly match the search query



**Returns:** `EntityType`&lt;`?`&gt;[]

### findEntityTypes()

```java
public static EntityType<?>[] findEntityTypes(String query)
```

**Returns**: an array of items which contain the search query



**Returns:** `EntityType`&lt;`?`&gt;[]

### getID()

```java
public static String getID(EntityType<?> entityType)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

