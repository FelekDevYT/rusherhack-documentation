# ColorSetting

**Package:** `org.rusherhack.client.api.setting`

**Source:** `org/rusherhack/client/api/setting/ColorSetting.java`

**Author:** John200410 6/10/2023



## Overview

`ColorSetting` is a class that extends [Setting](/core/setting/Setting.md).

## Constructor

```java
public ColorSetting(String name, Color value)
```

```java
public ColorSetting(String name, String description, int value)
```

```java
public ColorSetting(String name, String description, Color value)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| rainbow | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| hasRainbowOption | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| rainbowMode | [RainbowMode](/client/api/setting/RainbowMode.md) | private |
| rainbowOffset | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private |
| hasAlpha | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| themeSync | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| themeSyncAllowed | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### getRealValue()

```java
public Color getRealValue()
```

**Returns:** `Color`

### getValue()

```java
public Color getValue()
```

**Returns:** `Color`

### getDisplayValue()

```java
public String getDisplayValue()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getRainbowWithOffset()

```java
public int getRainbowWithOffset(int offset)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getValueRGB()

```java
public int getValueRGB()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### isRainbow()

```java
public boolean isRainbow()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setRainbow()

```java
public ColorSetting setRainbow(boolean rainbow)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### isRainbowAllowed()

```java
public boolean isRainbowAllowed()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setRainbowAllowed()

```java
public ColorSetting setRainbowAllowed(boolean hasRainbowOption)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### getRainbowMode()

```java
public RainbowMode getRainbowMode()
```

**Returns:** [RainbowMode](/client/api/setting/RainbowMode.md)

### setRainbowMode()

```java
public void setRainbowMode(RainbowMode rainbowMode)
```

### getRainbowOffset()

```java
public int getRainbowOffset()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setRainbowOffset()

```java
public void setRainbowOffset(int rainbowOffset)
```

### isAlphaAllowed()

```java
public boolean isAlphaAllowed()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setAlphaAllowed()

```java
public ColorSetting setAlphaAllowed(boolean hasAlpha)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### isThemeSync()

```java
public boolean isThemeSync()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setThemeSync()

```java
public ColorSetting setThemeSync(boolean themeSync)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### isThemeSyncAllowed()

```java
public boolean isThemeSyncAllowed()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setThemeSyncAllowed()

```java
public ColorSetting setThemeSyncAllowed(boolean themeSyncAllowed)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### parseValue()

```java
public Color parseValue(String string, boolean set)
```

**Returns:** `Color`

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

### getRed()

```java
public int getRed()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setRed()

```java
public void setRed(int red)
```

### getGreen()

```java
public int getGreen()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setGreen()

```java
public void setGreen(int green)
```

### getBlue()

```java
public int getBlue()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setBlue()

```java
public void setBlue(int blue)
```

### getAlpha()

```java
public int getAlpha()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setAlpha()

```java
public void setAlpha(int alpha)
```

### setAlphaAllowed()

```java
public void setAlphaAllowed(int alpha)
```

i fucked up and named it that by accident

### setHue()

```java
public void setHue(float hue)
```

**Parameter `hue`**: 0-1



### getHue()

```java
public float getHue()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### getSaturation()

```java
public float getSaturation()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### getBrightness()

```java
public float getBrightness()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setDescription()

```java
public ColorSetting setDescription(String description)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### setVisibility()

```java
public ColorSetting setVisibility(BooleanSupplier tester)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### onChange()

```java
public ColorSetting onChange(Runnable run)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### onChange()

```java
public ColorSetting onChange(Consumer<Color> consumer)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### setHidden()

```java
public ColorSetting setHidden(boolean hidden)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### setShouldSerialize()

```java
public ColorSetting setShouldSerialize(boolean shouldSerialize)
```

**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

