# ListSetting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/core/setting/ListSetting.java`

A setting for a list of elements



It extends Setting<Boolean> because listsettings can be toggled (like for Search Blocks setting)
* **Author:** john@rusherhack.org 12/18/2025



## Overview

`ListSetting` is a class that extends [Setting](/core/setting/Setting.md) and implements [Iterable](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Iterable.html).

## Constructor

```java
public ListSetting(String name, T defaultItems)
```

```java
public ListSetting(String name, String description, T defaultItems)
```

```java
public ListSetting(String name, String description, boolean toggleable, T defaultItems)
```

```java
public ListSetting(String name, String description, Collection<T> collection)
```

```java
public ListSetting(String name, String description, boolean toggleable, Collection<T> collection)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| toggleable | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |


## Methods

### serializeElement()

```java
public abstract JsonElement serializeElement(T element)
```

**Returns:** `JsonElement`

### deserializeElement()

```java
public abstract T deserializeElement(JsonElement element)
```

**Returns:** `T`

### parseElement()

```java
public abstract T parseElement(String string)
```

**Returns:** `T`

### getElementDisplayName()

```java
public abstract String getElementDisplayName(T element)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### parseValue()

```java
public ListHolder<T> parseValue(String string, boolean set)
```

**Returns:** [ListHolder](/core/setting/ListHolder.md)&lt;`T`&gt;

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### add()

```java
public boolean add(T element)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### addAll()

```java
public boolean addAll(T elements)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### remove()

```java
public boolean remove(T element)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### removeAll()

```java
public boolean removeAll(T elements)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### contains()

```java
public boolean contains(T element)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### clear()

```java
public void clear()
```

### isToggleable()

```java
public boolean isToggleable()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isToggled()

```java
public boolean isToggled()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setToggled()

```java
public void setToggled(boolean toggled)
```

### getPossibleElements()

```java
public Collection<T> getPossibleElements()
```

**Returns**: a set of elements that can be added to this list, or null



**Returns:** [Collection](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html)&lt;`T`&gt;

### getList()

```java
public Collection<T> getList()
```

**Returns:** [Collection](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html)&lt;`T`&gt;

### getDisplayString()

```java
public String getDisplayString()
```

**Returns**: the name used in commands, like "Search Blocks"



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getElementAttributes()

```java
public String[] getElementAttributes(T element)
```

**Returns**: an array of attribute values associated with the element, or the names of the attribute type of parameter is null



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

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

### createClearCommand()

```java
protected AbstractCommand createClearCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### deserializeValue()

```java
public boolean deserializeValue(JsonElement json)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### serializeValue()

```java
public JsonElement serializeValue()
```

**Returns:** `JsonElement`

### reset()

```java
public void reset(boolean includeSubSettings)
```

### iterator()

```java
public Iterator<T> iterator()
```

**Returns:** [Iterator](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Iterator.html)&lt;`T`&gt;

### setDescription()

```java
public ListSetting<T> setDescription(String description)
```

**Returns:** [ListSetting](/core/setting/ListSetting.md)&lt;`T`&gt;

### setVisibility()

```java
public ListSetting<T> setVisibility(BooleanSupplier tester)
```

**Returns:** [ListSetting](/core/setting/ListSetting.md)&lt;`T`&gt;

### setHidden()

```java
public ListSetting<T> setHidden(boolean hidden)
```

**Returns:** [ListSetting](/core/setting/ListSetting.md)&lt;`T`&gt;

### onChange()

```java
public ListSetting<T> onChange(Runnable run)
```

**Returns:** [ListSetting](/core/setting/ListSetting.md)&lt;`T`&gt;

### onChange()

```java
public ListSetting<T> onChange(Consumer<ListHolder<T>> consumer)
```

**Returns:** [ListSetting](/core/setting/ListSetting.md)&lt;`T`&gt;

### setShouldSerialize()

```java
public ListSetting<T> setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [ListSetting](/core/setting/ListSetting.md)&lt;`T`&gt;

