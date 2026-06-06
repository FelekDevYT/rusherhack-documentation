# ModeSetting

**Package:** `org.rusherhack.client.api.setting`

**Source:** `org/rusherhack/client/api/setting/ModeSetting.java`

**Author:** john@rusherhack.org 12/26/2025



## Overview

`ModeSetting` is a class that extends [OptionSetting](/core/setting/OptionSetting.md).

## Constructor

```java
public ModeSetting(String name, T value, T options)
```

```java
public ModeSetting(String name, String description, T value, T options)
```

## Methods

### parseValue()

```java
public T parseValue(String string, boolean set)
```

**Returns:** `T`

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### serializeValue()

```java
public JsonElement serializeValue()
```

**Returns:** `JsonElement`

### deserializeValue()

```java
public boolean deserializeValue(JsonElement json)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setDescription()

```java
public ModeSetting<T> setDescription(String description)
```

**Returns:** [ModeSetting](/client/api/setting/ModeSetting.md)&lt;`T`&gt;

### setVisibility()

```java
public ModeSetting<T> setVisibility(BooleanSupplier tester)
```

**Returns:** [ModeSetting](/client/api/setting/ModeSetting.md)&lt;`T`&gt;

### onChange()

```java
public ModeSetting<T> onChange(Runnable run)
```

**Returns:** [ModeSetting](/client/api/setting/ModeSetting.md)&lt;`T`&gt;

### onChange()

```java
public ModeSetting<T> onChange(Consumer<T> consumer)
```

**Returns:** [ModeSetting](/client/api/setting/ModeSetting.md)&lt;`T`&gt;

### setHidden()

```java
public ModeSetting<T> setHidden(boolean hidden)
```

**Returns:** [ModeSetting](/client/api/setting/ModeSetting.md)&lt;`T`&gt;

### setShouldSerialize()

```java
public ModeSetting<T> setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [ModeSetting](/client/api/setting/ModeSetting.md)&lt;`T`&gt;

