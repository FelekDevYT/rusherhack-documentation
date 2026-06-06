# Setting

**Package:** `org.rusherhack.core.setting`

**Source:** `org/rusherhack/core/setting/Setting.java`

**Author:** john@rusherhack.org 1/15/2023



## Overview

`Setting` is a class and implements [IFeature](/core/feature/IFeature.md), [IHideable](/core/interfaces/IHideable.md), [JsonSerializable](/core/serialize/JsonSerializable.md).

## Constructor

```java
public Setting(String name, T value)
```

```java
public Setting(String name, String description, T value)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | protected final |
| displayName | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | protected |
| description | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | protected |
| value | `T` | protected |
| defaultValue | `T` | protected |
| hidden | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| subSettings | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt; | protected final |
| parent | [Setting](/core/setting/Setting.md)&lt;`?`&gt; | protected |
| attachedFeature | [IFeature](/core/feature/IFeature.md) | protected |
| consumer | [Consumer](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Consumer.html)&lt;`T`&gt; | protected |
| visibilityTest | `BooleanSupplier` | protected |
| shouldSerialize | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| shouldHaveCommand | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |


## Methods

### parseValue()

```java
public abstract T parseValue(String string, boolean set)
```

Parses a string into a value for this setting
* **Parameter `string`**: String to parse


**Parameter `set`**: Whether to set the value if it is parsed successfully


**Returns**: The parsed value, null if it failed to parse



**Returns:** `T`

### getDisplayValue()

```java
public abstract String getDisplayValue()
```

**Returns**: a String representing the value of this object



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### serializeValue()

```java
public abstract JsonElement serializeValue()
```

Serializes this setting's value into a `JsonElement`
* **Returns**: {

@link JsonElement} representing the setting value

**Returns:** `JsonElement`

### deserializeValue()

```java
public abstract boolean deserializeValue(JsonElement json)
```

Deserializes a `JsonElement` into this setting
* **Parameter `json`**: **Returns**: whether deserialization was successful





**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getValue()

```java
public T getValue()
```

**Returns**: the value of this setting



**Returns:** `T`

### getDefaultValue()

```java
public T getDefaultValue()
```

**Returns**: the default value of this setting



**Returns:** `T`

### setValue()

```java
public void setValue(T value)
```

Sets the value of this setting
* **Parameter `value`**: the value to set



### setValueObj()

```java
public void setValueObj(Object value)
```

Sets the value of this setting
* **Parameter `value`**: the value to set



### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDisplayName()

```java
public String getDisplayName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setDisplayName()

```java
public void setDisplayName(String displayName)
```

### getFullName()

```java
public String getFullName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDescription()

```java
public String getDescription()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setDescription()

```java
public Setting<T> setDescription(String description)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### getReferenceKey()

```java
public String getReferenceKey()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setVisibility()

```java
public Setting<T> setVisibility(BooleanSupplier tester)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### setHidden()

```java
public Setting<T> setHidden(boolean hidden)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### isHiddenByDefault()

```java
public boolean isHiddenByDefault()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isHidden()

```java
public boolean isHidden()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### reset()

```java
public boolean reset()
```

Resets this feature to it's default state
* **Returns**: true if the feature was reset



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### reset()

```java
public void reset(boolean includeSubSettings)
```

### addSubSettings()

```java
public void addSubSettings(Setting<?> settings)
```

### getSubSettings()

```java
public List<Setting<?>> getSubSettings()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt;

### getAllSubSettings()

```java
public List<Setting<?>> getAllSubSettings()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt;

### getSubSetting()

```java
public Setting<?> getSubSetting(String name)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`?`&gt;

### setChangeAction()

```java
public Setting<T> setChangeAction(Runnable run)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### onChange()

```java
public Setting<T> onChange(Runnable run)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### onChange()

```java
public Setting<T> onChange(Consumer<T> consumer)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### getConsumer()

```java
public Consumer<T> getConsumer()
```

**Returns:** [Consumer](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Consumer.html)&lt;`T`&gt;

### setShouldHaveCommand()

```java
public Setting<T> setShouldHaveCommand(boolean shouldHaveCommand)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### shouldHaveCommand()

```java
public boolean shouldHaveCommand()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setShouldSerialize()

```java
public Setting<T> setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`T`&gt;

### shouldSerialize()

```java
public boolean shouldSerialize(boolean autosave)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### serialize()

```java
public JsonElement serialize()
```

**Returns:** `JsonElement`

### deserialize()

```java
public boolean deserialize(JsonElement jsonElement)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### serializeSubSettings()

```java
private JsonElement serializeSubSettings()
```

**Returns:** `JsonElement`

### deserializeSubSettings()

```java
private boolean deserializeSubSettings(JsonElement subSettings)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### createCommand()

```java
public AbstractCommand createCommand(AbstractCommand parent)
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### setAttachedFeature()

```java
public void setAttachedFeature(IFeature attachedFeature)
```

Internal use only

### setParent()

```java
public void setParent(Setting<?> parent)
```

### getParent()

```java
public Setting<?> getParent()
```

**Returns:** [Setting](/core/setting/Setting.md)&lt;`?`&gt;

