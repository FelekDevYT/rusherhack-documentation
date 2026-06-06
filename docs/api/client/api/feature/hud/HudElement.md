# HudElement

**Package:** `org.rusherhack.client.api.feature.hud`

**Source:** `org/rusherhack/client/api/feature/hud/HudElement.java`

A hud element is a draggable [ElementBase](/client/api/ui/ElementBase.md) that can be rendered on the screen.
* TODO: refactor and document
**Author:** John200410 3/15/2023



## Overview

`HudElement` is a class that extends [ScaledElementBase](/client/api/ui/ScaledElementBase.md) and implements [IHudElement](/client/api/feature/hud/IHudElement.md), [IBindable](/core/bind/IBindable.md), `EventListener`, [ILoggable](/core/logging/ILoggable.md), [Globals](/client/api/Globals.md).

## Constructor

```java
public HudElement(String name)
```

```java
public HudElement(String name, String description)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private final |
| displayName | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| toggled | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| description | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| settings | [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt; | private final |
| snapPoint | [SnapPoint](/client/api/feature/hud/SnapPoint.md) | protected |
| alignment | [Alignment](/client/api/feature/hud/Alignment.md) | protected |
| dragging | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | protected |
| dragDeltaX | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| dragDeltaY | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| logger | [ILogger](/core/logging/ILogger.md) | protected final |


## Methods

### render()

```java
public void render(RenderContext context, double mouseX, double mouseY)
```

### correctPosition()

```java
protected void correctPosition(Alignment old, Alignment newAlignment)
```

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

### getDescription()

```java
public String getDescription()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setDescription()

```java
public void setDescription(String description)
```

### getReferenceKey()

```java
public String getReferenceKey()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getSettings()

```java
public List<Setting<?>> getSettings()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Setting](/core/setting/Setting.md)&lt;`?`&gt;&gt;

### mouseClicked()

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

### mouseMoved()

```java
public void mouseMoved(double mouseX, double mouseY)
```

### isDragging()

```java
public boolean isDragging()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isHovered()

```java
public boolean isHovered(double mouseX, double mouseY)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### toggle()

```java
public void toggle()
```

### onEnable()

```java
public void onEnable()
```

### onDisable()

```java
public void onDisable()
```

### getBindReference()

```java
public String getBindReference()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### onKeybindEvent()

```java
public void onKeybindEvent()
```

### getLogger()

```java
public ILogger getLogger()
```

**Returns:** [ILogger](/core/logging/ILogger.md)

### isToggled()

```java
public boolean isToggled()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setToggled()

```java
public void setToggled(boolean toggled)
```

### isListening()

```java
public boolean isListening()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### createCommand()

```java
public AbstractCommand createCommand()
```

**Returns:** [AbstractCommand](/core/command/AbstractCommand.md)

### setX()

```java
public void setX(double x)
```

### setY()

```java
public void setY(double y)
```

### getX()

```java
public double getX()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getY()

```java
public double getY()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getStartX()

```java
public double getStartX()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getStartY()

```java
public double getStartY()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### setStartX()

```java
public void setStartX(double x)
```

### setStartY()

```java
public void setStartY(double y)
```

### getScale()

```java
public double getScale()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getFontRenderer()

```java
public IFontRenderer getFontRenderer()
```

**Returns:** [IFontRenderer](/client/api/render/font/IFontRenderer.md)

### getSnapPoint()

```java
public SnapPoint getSnapPoint()
```

**Returns:** [SnapPoint](/client/api/feature/hud/SnapPoint.md)

### setSnapPoint()

```java
public void setSnapPoint(SnapPoint snapPoint)
```

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

### reset()

```java
public boolean reset()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### shouldUpdateAlignment()

```java
protected boolean shouldUpdateAlignment()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getAlignment()

```java
public Alignment getAlignment()
```

**Returns:** [Alignment](/client/api/feature/hud/Alignment.md)

### calculateAlignment()

```java
public static Alignment calculateAlignment(HudElement element)
```

**Returns:** [Alignment](/client/api/feature/hud/Alignment.md)

### calculateAlignment()

```java
public static Alignment calculateAlignment(double x, double y)
```

**Returns:** [Alignment](/client/api/feature/hud/Alignment.md)

