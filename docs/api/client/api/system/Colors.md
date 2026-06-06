# Colors

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/Colors.java`

Interface for grabbing the user's color preferences
* **Author:** John200410 6/16/2023



## Overview

`Colors` is a interface.

## Methods

### primaryColor()

```java
 ColorSetting primaryColor()
```

**Returns**: the primary theme color



**Returns:** [ColorSetting](/client/api/setting/ColorSetting.md)

### getRainbowColor()

```java
 int getRainbowColor(ColorSetting setting, int offsetMs)
```

Uses `org.rusherhack.core.utils.ColorUtils` to get either a rainbow or gradient color based on color preferences

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getEntityColor()

```java
 Color getEntityColor(Entity entity, ColorMode mode)
```

**Returns:** `Color`

### getBlockEntityColor()

```java
 Color getBlockEntityColor(BlockEntity tileEntity, ColorMode mode)
```

**Returns:** `Color`

