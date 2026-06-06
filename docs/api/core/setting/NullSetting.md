# NullSetting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/core/setting/NullSetting.java`

Setting to be used for placeholders
* **Author:** john@rusherhack.org 1/24/2023



## Overview

`NullSetting` is a class that extends [Setting](/core/setting/Setting.md).

## Constructor

```java
public NullSetting(String name)
```

```java
public NullSetting(String name, String description)
```

## Methods

### setValue()

```java
public void setValue(Object value)
```

### parseValue()

```java
public Object parseValue(String string, boolean set)
```

**Returns:** [Object](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html)

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

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

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### setDescription()

```java
public NullSetting setDescription(String description)
```

**Returns:** [NullSetting](/core/setting/NullSetting.md)

### setVisibility()

```java
public NullSetting setVisibility(BooleanSupplier tester)
```

**Returns:** [NullSetting](/core/setting/NullSetting.md)

### onChange()

```java
public NullSetting onChange(Runnable run)
```

**Returns:** [NullSetting](/core/setting/NullSetting.md)

### onChange()

```java
public NullSetting onChange(Consumer<Object> consumer)
```

**Returns:** [NullSetting](/core/setting/NullSetting.md)

### setHidden()

```java
public NullSetting setHidden(boolean hidden)
```

**Returns:** [NullSetting](/core/setting/NullSetting.md)

### setShouldSerialize()

```java
public NullSetting setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [NullSetting](/core/setting/NullSetting.md)

