# ItemListSetting

**Package:** `org.rusherhack.client.api.setting`

**Source:** `org/rusherhack/client/api/setting/ItemListSetting.java`

**Author:** john@rusherhack.org 12/24/2025



## Overview

`ItemListSetting` is a class that extends [ListSetting](/core/setting/ListSetting.md).

## Constructor

```java
public ItemListSetting(String name, Item defaultItems)
```

```java
public ItemListSetting(String name, String description, Item defaultItems)
```

```java
public ItemListSetting(String name, String description, boolean toggleable, Item defaultItems)
```

## Methods

### serializeElement()

```java
public JsonElement serializeElement(Item item)
```

**Returns:** `JsonElement`

### deserializeElement()

```java
public Item deserializeElement(JsonElement element)
```

**Returns:** `Item`

### parseElement()

```java
public Item parseElement(String string)
```

**Returns:** `Item`

### getElementDisplayName()

```java
public String getElementDisplayName(Item item)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getElementAttributes()

```java
public String[] getElementAttributes(Item element)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### getPossibleElements()

```java
public Collection<Item> getPossibleElements()
```

**Returns:** [Collection](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html)&lt;`Item`&gt;

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

