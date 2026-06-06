# ThemeBase

**Package:** `org.rusherhack.client.api.ui.theme`

**Source:** `org/rusherhack/client/api/ui/theme/ThemeBase.java`

**Author:** John200410 2/23/2023



## Overview

`ThemeBase` is a class and implements [ITheme](/client/api/ui/theme/ITheme.md).

## Constructor

```java
public ThemeBase(String name, String description, Color defaultColor)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| description | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| settings | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt; | private final |
| color | [ColorSetting](/client/api/setting/ColorSetting.md) | private final |


## Methods

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getDescription()

```java
public String getDescription()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getSettings()

```java
public List<Setting<?>> getSettings()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt;

### getColorSetting()

```java
public ColorSetting getColorSetting()
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### getPrimaryColor()

```java
public Color getPrimaryColor()
```

**Returns:** `Color`

