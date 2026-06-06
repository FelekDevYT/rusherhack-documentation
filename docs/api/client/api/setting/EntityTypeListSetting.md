# EntityTypeListSetting

**Package:** `org.rusherhack.client.api.setting`

**Source:** `org/rusherhack/client/api/setting/EntityTypeListSetting.java`

**Author:** john@rusherhack.org 12/24/2025



## Overview

`EntityTypeListSetting` is a class that extends [ListSetting](/core/setting/ListSetting.md).

## Constructor

```java
public EntityTypeListSetting(String name, EntityType<?> defaultItems)
```

```java
public EntityTypeListSetting(String name, String description, EntityType<?> defaultItems)
```

```java
public EntityTypeListSetting(String name, String description, boolean toggleable, EntityType<?> defaultItems)
```

## Methods

### serializeElement()

```java
public JsonElement serializeElement(EntityType<?> entityType)
```

**Returns:** `JsonElement`

### deserializeElement()

```java
public EntityType<?> deserializeElement(JsonElement element)
```

**Returns:** `EntityType`&lt;`?`&gt;

### parseElement()

```java
public EntityType<?> parseElement(String string)
```

**Returns:** `EntityType`&lt;`?`&gt;

### getElementDisplayName()

```java
public String getElementDisplayName(EntityType<?> entityType)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getElementAttributes()

```java
public String[] getElementAttributes(EntityType<?> element)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### getPossibleElements()

```java
public Collection<EntityType<?>> getPossibleElements()
```

**Returns:** [Collection](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html)&lt;`EntityType`&lt;`?`&gt;&gt;

### createAddCommand()

```java
protected AbstractCommand createAddCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### createRemoveCommand()

```java
protected AbstractCommand createRemoveCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### createListCommand()

```java
protected AbstractCommand createListCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

