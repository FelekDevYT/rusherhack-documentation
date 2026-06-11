# ShortListHudElement

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/api/javadoc/client/api/feature/hud/ShortListHudElement.java`

**Author:** John200410 7/25/2023



## Overview

`ShortListHudElement` is a class that extends [HudElement](/api/javadoc/client/api/feature/hud/HudElement.md).

## Constructor

```java
public ShortListHudElement(String name)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| COMMA_SEPARATOR_COMPONENT | `Component` | public static final |
| PADDING | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | public static final |
| color | [ColorSetting](/api/javadoc/client/api/setting/ColorSetting.md) | private final |
| axis | [EnumSetting](/api/javadoc/core/setting/EnumSetting.md)&lt;[TextAxis](/api/javadoc/client/api/feature/hud/TextAxis.md)&gt; | protected final |
| list | `Component` | private |
| width | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| height | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |


## Methods

### getComponents()

```java
public abstract Component[] getComponents()
```

**Returns:** `Component`[]

### renderContent()

```java
public void renderContent(RenderContext context, double mouseX, double mouseY)
```

### tick()

```java
public void tick()
```

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

