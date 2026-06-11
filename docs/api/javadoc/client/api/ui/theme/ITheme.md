# ITheme

**Package:** `org.rusherhack.client.api.ui.theme`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/theme/ITheme.java`

Interface for creating themes.



A theme is a feature which changes the look and feel of the menus.
* **Author:** John200410 2/23/2023



## Overview

`ITheme` is a interface that extends [IFeatureConfigurable](/api/javadoc/core/feature/IFeatureConfigurable.md), [JsonSerializable](/api/javadoc/core/serialize/JsonSerializable.md).

## Methods

### initialize()

```java
default void initialize()
```

Called when rusherhack is finished loading, and the theme should be initialized.

### getClickGuiHandler()

```java
default PanelHandlerBase<?> getClickGuiHandler()
```

This theme's ClickGUI handler
* **Returns**: panel handler for the ClickGUI, or null if this theme does not have a ClickGUI



**Returns:** [PanelHandlerBase](/api/javadoc/client/api/ui/panel/PanelHandlerBase.md)&lt;`?`&gt;

### getHudHandler()

```java
default HudHandlerBase getHudHandler()
```

This theme's HUD handler
* **Returns**: the hud handler, or null if this theme does not have a HUD



**Returns:** [HudHandlerBase](/api/javadoc/client/api/ui/hud/HudHandlerBase.md)

### getWindowHandler()

```java
default WindowHandlerBase getWindowHandler()
```

This theme's window handler
* **Returns**: the window handler, or null if this theme does not have a window handler



**Returns:** [WindowHandlerBase](/api/javadoc/client/api/ui/window/WindowHandlerBase.md)

### getColorSetting()

```java
 ColorSetting getColorSetting()
```

**Returns**: The ColorSetting for this theme



**Returns:** [ColorSetting](/api/javadoc/client/api/setting/ColorSetting.md)

### getPrimaryColor()

```java
default Color getPrimaryColor()
```

**Returns:** `Color`

### serialize()

```java
default JsonElement serialize()
```

**Returns:** `JsonElement`

### deserialize()

```java
default boolean deserialize(JsonElement jsonElement)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

