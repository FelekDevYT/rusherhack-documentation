# OptionSetting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/core/setting/OptionSetting.java`

Like [EnumSetting](/core/setting/EnumSetting.md) but better
* **Author:** john@rusherhack.org 12/26/2025



## Overview

`OptionSetting` is a class that extends [Setting](/core/setting/Setting.md).

## Constructor

```java
public OptionSetting(String name, T value, T options)
```

```java
public OptionSetting(String name, String description, T value, T options)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| options | [ArrayList](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html)&lt;`T`&gt; | protected final |


## Methods

### addOption()

```java
public OptionSetting<T> addOption(T option)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

### getOptions()

```java
public ArrayList<T> getOptions()
```

**Returns:** [ArrayList](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html)&lt;`T`&gt;

### sort()

```java
public void sort(Comparator<T> comparator)
```

### setDescription()

```java
public OptionSetting<T> setDescription(String description)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

### setVisibility()

```java
public OptionSetting<T> setVisibility(BooleanSupplier tester)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

### onChange()

```java
public OptionSetting<T> onChange(Runnable run)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

### onChange()

```java
public OptionSetting<T> onChange(Consumer<T> consumer)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

### setHidden()

```java
public OptionSetting<T> setHidden(boolean hidden)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

### setShouldSerialize()

```java
public OptionSetting<T> setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [OptionSetting](/core/setting/OptionSetting.md)&lt;`T`&gt;

