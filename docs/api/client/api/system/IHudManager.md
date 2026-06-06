# IHudManager

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/IHudManager.java`

**Author:** John200410 7/16/2023



## Overview

`IHudManager` is a interface that extends [IFeatureManager](/core/feature/IFeatureManager.md).

## Methods

### moveToTop()

```java
 void moveToTop(HudElement element)
```

Moves a HUD element to the top
* **Parameter `element`**: hud element



### getScale()

```java
 double getScale()
```

**Returns**: The scale of the HUD



**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getPrimaryColor()

```java
 Color getPrimaryColor()
```

**Returns**: The primary color of the HUD



**Returns:** `Color`

### getSecondaryColor()

```java
 Color getSecondaryColor()
```

**Returns**: The secondary color of the HUD



**Returns:** `Color`

### getBackgroundColor()

```java
 Color getBackgroundColor()
```

**Returns**: The color for HUD element backgrounds



**Returns:** `Color`

### isThemeColorSynced()

```java
 boolean isThemeColorSynced()
```

**Returns**: Whether global theme color syncing is enabled for hud elements



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isGlobalColorSynced()

```java
 boolean isGlobalColorSynced()
```

**Returns**: Whether global color syncing is enabled for hud elements



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getModuleToggleColor()

```java
 Color getModuleToggleColor(boolean toggled)
```

**Returns:** `Color`

