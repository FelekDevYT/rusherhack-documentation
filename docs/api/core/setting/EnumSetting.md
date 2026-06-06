# EnumSetting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/core/setting/EnumSetting.java`

**Author:** john@rusherhack.org 1/24/2023



## Overview

`EnumSetting` is a class that extends [Setting](/core/setting/Setting.md).

## Constructor

```java
public EnumSetting(String name, T value)
```

```java
public EnumSetting(String name, String description, T value)
```

## Methods

### parseValue()

```java
public T parseValue(String string, boolean set)
```

**Returns:** `T`

### increment()

```java
public void increment()
```

### decrement()

```java
public void decrement()
```

### getOptions()

```java
public String[] getOptions(boolean displayName)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[]

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
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

### setDescription()

```java
public EnumSetting<T> setDescription(String description)
```

**Returns:** [EnumSetting](/core/setting/EnumSetting.md)&lt;`T`&gt;

### setVisibility()

```java
public EnumSetting<T> setVisibility(BooleanSupplier tester)
```

**Returns:** [EnumSetting](/core/setting/EnumSetting.md)&lt;`T`&gt;

### onChange()

```java
public EnumSetting<T> onChange(Runnable run)
```

**Returns:** [EnumSetting](/core/setting/EnumSetting.md)&lt;`T`&gt;

### onChange()

```java
public EnumSetting<T> onChange(Consumer<T> consumer)
```

**Returns:** [EnumSetting](/core/setting/EnumSetting.md)&lt;`T`&gt;

### setHidden()

```java
public EnumSetting<T> setHidden(boolean hidden)
```

**Returns:** [EnumSetting](/core/setting/EnumSetting.md)&lt;`T`&gt;

### setShouldSerialize()

```java
public EnumSetting<T> setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [EnumSetting](/core/setting/EnumSetting.md)&lt;`T`&gt;

