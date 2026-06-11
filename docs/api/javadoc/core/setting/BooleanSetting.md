# BooleanSetting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/api/javadoc/core/setting/BooleanSetting.java`

**Author:** john@rusherhack.org 1/15/2023



## Overview

`BooleanSetting` is a class that extends [Setting](/api/javadoc/core/setting/Setting.md).

## Constructor

```java
public BooleanSetting(String name, Boolean value)
```

```java
public BooleanSetting(String name, String description, Boolean value)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| TRUE_ALIASES | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |
| FALSE_ALIASES | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |


## Methods

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

### parseValue()

```java
public Boolean parseValue(String string, boolean set)
```

**Returns:** [Boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/api/javadoc/core/command/AbstractCommand.md)

### setDescription()

```java
public BooleanSetting setDescription(String description)
```

**Returns:** [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md)

### setVisibility()

```java
public BooleanSetting setVisibility(BooleanSupplier tester)
```

**Returns:** [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md)

### onChange()

```java
public BooleanSetting onChange(Runnable run)
```

**Returns:** [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md)

### onChange()

```java
public BooleanSetting onChange(Consumer<Boolean> consumer)
```

**Returns:** [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md)

### setHidden()

```java
public BooleanSetting setHidden(boolean hidden)
```

**Returns:** [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md)

### setShouldSerialize()

```java
public BooleanSetting setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md)

