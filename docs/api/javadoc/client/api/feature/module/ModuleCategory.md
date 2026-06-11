# ModuleCategory

**Package:** `org.rusherhack.client.api.feature.module`

**Source:** `org/rusherhack/api/javadoc/client/api/feature/module/ModuleCategory.java`

**Author:** John200410 1/16/2023



## Overview

`ModuleCategory` is a class and implements [INamed](/api/javadoc/core/interfaces/INamed.md), [IReferenceable](/api/javadoc/core/interfaces/IReferenceable.md).

## Constructor

```java
 ModuleCategory(String name)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| CATEGORY_REGISTRY | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md)&gt; | private static final |
| CHAT | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| COMBAT | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| MISC | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| MOVEMENT | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| PLAYER | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| RENDER | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| WORLD | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| CLIENT | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| EXTERNAL | [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md) | public static final |
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| displayName | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |


## Methods

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

### isDefaultCategory()

```java
public boolean isDefaultCategory()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getOrRegister()

```java
public static ModuleCategory getOrRegister(String name)
```

**Returns:** [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md)

### register()

```java
public static ModuleCategory register(String name)
```

Register a new module category
* **Parameter `name`**: name of the category



**Returns:** [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md)

### register()

```java
private static void register(ModuleCategory category)
```

### getCategoryByName()

```java
public static ModuleCategory getCategoryByName(String name)
```

**Returns:** [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md)

### getCategories()

```java
public static List<ModuleCategory> getCategories()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md)&gt;

### values()

```java
public static ModuleCategory[] values()
```

kept for backwards compatibility (this class used to be an enum)

**Returns:** [ModuleCategory](/api/javadoc/client/api/feature/module/ModuleCategory.md)[]

### initializeCategories()

```java
public static void initializeCategories()
```

Initializes the category registry, with the default categories

### getReferenceKey()

```java
public String getReferenceKey()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

