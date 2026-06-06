# NumberSetting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/core/setting/NumberSetting.java`

**Author:** john@rusherhack.org 1/15/2023



## Overview

`NumberSetting` is a class that extends [Setting](/core/setting/Setting.md).

## Constructor

```java
public NumberSetting(String name, T value, T minimum, T maximum)
```

```java
public NumberSetting(String name, String description, T value, T minimum, T maximum)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| DISPLAY_FORMAT | `DecimalFormat` | public static final |
| minimum | `T` | private final |
| maximum | `T` | private final |
| clampMinimum | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| clampMaximum | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| incrementing | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| incrementStep | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |


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

### setValueObj()

```java
public void setValueObj(Object value)
```

### setValue()

```java
public void setValue(double d)
```

### setValue()

```java
public void setValue(double d, boolean clamp, boolean round)
```

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

### getMinimum()

```java
public T getMinimum()
```

**Returns:** `T`

### getMaximum()

```java
public T getMaximum()
```

**Returns:** `T`

### clampMin()

```java
public NumberSetting<T> clampMin()
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### clampMax()

```java
public NumberSetting<T> clampMax()
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### incremental()

```java
public NumberSetting<T> incremental(double incrementStep)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### convertValue()

```java
private T convertValue(double value)
```

**Returns:** `T`

### setDescription()

```java
public NumberSetting<T> setDescription(String description)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### setVisibility()

```java
public NumberSetting<T> setVisibility(BooleanSupplier tester)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### onChange()

```java
public NumberSetting<T> onChange(Runnable run)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### onChange()

```java
public NumberSetting<T> onChange(Consumer<T> consumer)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### setHidden()

```java
public NumberSetting<T> setHidden(boolean hidden)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

### setShouldSerialize()

```java
public NumberSetting<T> setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [NumberSetting](/core/setting/NumberSetting.md)&lt;`T`&gt;

