# TextHudElement

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/api/javadoc/client/api/feature/hud/TextHudElement.java`

Basic hud element with text and a label
* **Author:** John200410 1/4/2023



## Overview

`TextHudElement` is a class that extends [HudElement](/api/javadoc/client/api/feature/hud/HudElement.md).

## Constructor

```java
public TextHudElement(String name)
```

```java
public TextHudElement(String name, boolean labeled)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| PADDING | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | public static final |
| labeled | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |
| widthCache | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| color | [ColorSetting](/api/javadoc/client/api/setting/ColorSetting.md) | private final |
| labelVisible | [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md) | private final |
| labelColor | [ColorSetting](/api/javadoc/client/api/setting/ColorSetting.md) | private final |
| colon | [BooleanSetting](/api/javadoc/core/setting/BooleanSetting.md) | private final |


## Methods

### renderContent()

```java
public void renderContent(RenderContext context, double mouseX, double mouseY)
```

### getLabel()

```java
public String getLabel()
```

**Returns**: the label of this hud element



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getText()

```java
public abstract String getText()
```

**Returns**: the text to be displayed



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getWidth()

```java
public double getWidth()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getHeight()

```java
public double getHeight()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### shouldUpdateAlignment()

```java
protected boolean shouldUpdateAlignment()
```

these are too simple and dont have to be re-aligned

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

