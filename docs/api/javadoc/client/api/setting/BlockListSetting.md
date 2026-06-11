# BlockListSetting

**Package:** `org.rusherhack.client.api.setting`

**Source:** `org/rusherhack/api/javadoc/client/api/setting/BlockListSetting.java`

**Author:** john@rusherhack.org 12/18/2025



## Overview

`BlockListSetting` is a class that extends [ListSetting](/api/javadoc/core/setting/ListSetting.md).

## Constructor

```java
public BlockListSetting(String name, Block defaultItems)
```

```java
public BlockListSetting(String name, String description, Block defaultItems)
```

```java
public BlockListSetting(String name, String description, boolean toggleable, Block defaultItems)
```

## Methods

### serializeElement()

```java
public JsonElement serializeElement(Block block)
```

**Returns:** `JsonElement`

### deserializeElement()

```java
public Block deserializeElement(JsonElement element)
```

**Returns:** `Block`

### parseElement()

```java
public Block parseElement(String string)
```

**Returns:** `Block`

### getElementDisplayName()

```java
public String getElementDisplayName(Block block)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getElementAttributes()

```java
public String[] getElementAttributes(Block element)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)

### getPossibleElements()

```java
public Collection<Block> getPossibleElements()
```

**Returns:** [Collection](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html)&lt;`Block`&gt;

### createAddCommand()

```java
protected AbstractCommand createAddCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)

### createRemoveCommand()

```java
protected AbstractCommand createRemoveCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)

### createListCommand()

```java
protected AbstractCommand createListCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)

