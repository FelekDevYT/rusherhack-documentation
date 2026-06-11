# ColorUtils

**Package:** `org.rusherhack.core.utils`

**Source:** `org/rusherhack/api/javadoc/core/utils/ColorUtils.java`

Helper class containing color related functions
* **Author:** John200410



## Overview

`ColorUtils` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| COLOR_MAP | [HashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)[], `Color`&gt; | public static final |


## Methods

### getRainbow()

```java
public static Color getRainbow(long timeOffsetMs, float speed, float saturation, float brightness)
```

**Returns:** `Color`

### getRainbowRGB()

```java
public static int getRainbowRGB(long timeOffsetMs, float speed, float saturation, float brightness)
```

Generates a rainbow color.
* **Parameter `timeOffsetMs`**: The time offset in milliseconds to start the rainbow effect.


**Parameter `speed`**: The speed of the rainbow effect.


**Parameter `saturation`**: The saturation value of the generated color (0.0 to 1.0).


**Parameter `brightness`**: The brightness value of the generated color (0.0 to 1.0).


**Returns**: An integer value representing the RGB color of the generated rainbow.



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getGradient()

```java
public static Color getGradient(Color[] colors, long timeOffsetMs, float speed)
```

**Returns:** `Color`

### getGradientRGB()

```java
public static int getGradientRGB(Color[] colors, long timeOffsetMs, float speed)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getGradientRGB()

```java
public static int getGradientRGB(int[] colors, long timeOffsetMs, float speed)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### blendColors()

```java
public static int blendColors(int[] colors, float fraction)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### transparency()

```java
public static Color transparency(Color c, int alpha)
```

**Returns:** `Color`

### transparency()

```java
public static Color transparency(Color c, float alpha)
```

**Returns:** `Color`

### transparency()

```java
public static int transparency(int c, int alpha)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### transparency()

```java
public static int transparency(int c, float alpha)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### brightness()

```java
public static int brightness(int c, float factor)
```

Does not use alpha

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getRGBA()

```java
public static float[] getRGBA(int color)
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)[]

### getHex()

```java
public static int getHex(int red, int green, int blue, int alpha)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### interpolateColor()

```java
public static int interpolateColor(int start, int end, double fraction)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### parseColor()

```java
public static Color parseColor(String col)
```

Get a color from its name or color code
* **Parameter `col`**: color string


**Returns**: Color object



**Returns:** `Color`

