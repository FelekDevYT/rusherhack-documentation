# IRenderer2D

**Package:** `org.rusherhack.client.api.render`

**Source:** `org/rusherhack/client/api/render/IRenderer2D.java`

**Author:** John200410 12/29/2022



## Overview

`IRenderer2D` is a interface that extends [IScissorable](/client/api/render/IScissorable.md).

## Methods

### begin()

```java
 void begin(Matrix3x2fStack matrixStack)
```

### begin()

```java
 void begin(Matrix3x2fStack matrixStack, IFontRenderer fontRenderer)
```

### begin()

```java
 void begin(GuiGraphics graphics)
```

### begin()

```java
 void begin(GuiGraphics graphics, IFontRenderer fontRenderer)
```

### end()

```java
 void end()
```

### isBuilding()

```java
 boolean isBuilding()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getFontRenderer()

```java
 IFontRenderer getFontRenderer()
```

**Returns:** [IFontRenderer](/client/api/render/font/IFontRenderer.md)

### drawRectangle()

```java
default void drawRectangle(double x, double y, double width, double height, int color)
```

### drawGradientRectangle()

```java
 void drawGradientRectangle(double x, double y, double endX, double endY, double width, double height, int startColor, int endColor)
```

### drawRectangleOutline()

```java
default void drawRectangleOutline(double x, double y, double width, double height, float outlineWidth, int color)
```

### drawOutlinedRectangle()

```java
default void drawOutlinedRectangle(double x, double y, double width, double height, float outlineWidth, int color, int outlineColor)
```

### drawRectangle()

```java
 void drawRectangle(double x, double y, double width, double height, float outlineWidth, int fillColor, int outlineColor)
```

### drawRoundedRectangle()

```java
default void drawRoundedRectangle(double x, double y, double width, double height, double radius, int color)
```

### drawRoundedRectangle()

```java
 void drawRoundedRectangle(double x, double y, double width, double height, double radius, float outlineWidth, int fillColor, int outlineColor)
```

### drawTriangle()

```java
default void drawTriangle(double x, double y, double size, double theta, int color)
```

### drawTriangleOutline()

```java
default void drawTriangleOutline(double x, double y, double size, double theta, float outlineWidth, int color)
```

### drawOutlinedTriangle()

```java
default void drawOutlinedTriangle(double x, double y, double size, double theta, float outlineWidth, int color, int outlineColor)
```

### drawTriangle()

```java
 void drawTriangle(double x, double y, double size, double theta, float outlineWidth, int fillColor, int outlineColor)
```

### drawCircle()

```java
default void drawCircle(double x, double y, double radius, int color)
```

### drawCircleOutline()

```java
default void drawCircleOutline(double x, double y, double radius, float outlineWidth, int color)
```

### drawOutlinedCircle()

```java
default void drawOutlinedCircle(double x, double y, double radius, float outlineWidth, int color, int outlineColor)
```

### drawCircle()

```java
default void drawCircle(double x, double y, double radius, float outlineWidth, int fillColor, int outlineColor)
```

### drawEllipse()

```java
default void drawEllipse(double x, double y, double radiusX, double radiusY, int color)
```

### drawEllipse()

```java
 void drawEllipse(double x, double y, double radiusX, double radiusY, float outlineWidth, int fillColor, int outlineColor)
```

### drawLine()

```java
 void drawLine(double x1, double y1, double x2, double y2, float thickness, int color)
```

### drawGraphicRectangle()

```java
default void drawGraphicRectangle(IGraphic graphic, double x, double y, double width, double height)
```

### drawGraphicRectangle()

```java
default void drawGraphicRectangle(IGraphic graphic, double x, double y, double width, double height, double roundedRadius)
```

### drawGraphicRectangle()

```java
 void drawGraphicRectangle(IGraphic graphic, double x, double y, double width, double height, float alpha, double roundedRadius)
```

### queue()

```java
 void queue(Runnable runnable)
```

### flushQueue()

```java
 void flushQueue()
```

