# IRenderer3D

**Package:** `org.rusherhack.client.api.render`

**Source:** `org/rusherhack/client/api/render/IRenderer3D.java`

TODO: possibly add drawQuad methods? drawVerticalQuad, drawHorizontalQuad, drawVerticalHorizontalQuad, draw HorizontalVerticalQuad
TODO: billboarding
TODO: render text
* **Author:** John200410 5/30/2023



## Overview

`IRenderer3D` is a interface.

## Methods

### begin()

```java
default void begin(PoseStack matrixStack)
```

### begin()

```java
default void begin(PoseStack matrixStack, MultiBufferSource.BufferSource bufferSource)
```

### begin()

```java
 void begin(PoseStack matrixStack, MultiBufferSource.BufferSource bufferSource, CameraRenderState cameraRenderState)
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

### setDepthTest()

```java
 void setDepthTest(boolean depthTest)
```

### setLineWidth()

```java
default void setLineWidth(float lineWidth)
```

### drawLine()

```java
default void drawLine(Vec3 start, Vec3 end, int color)
```

### drawLine()

```java
default void drawLine(Vec3 start, Vec3 end, float lineWidth, int color)
```

### drawLine()

```java
default void drawLine(double x1, double y1, double z1, double x2, double y2, double z2, int color)
```

### drawLine()

```java
default void drawLine(double x1, double y1, double z1, double x2, double y2, double z2, float lineWidth, int color)
```

### drawLine()

```java
 void drawLine(double x1, double y1, double z1, double x2, double y2, double z2, float lineWidth, int color1, int color2)
```

### drawBox()

```java
default void drawBox(BlockPos pos, DrawMode drawMode)
```

### drawBox()

```java
default void drawBox(BlockPos pos, boolean fill, boolean outline, int fillColor)
```

### drawBox()

```java
default void drawBox(BlockPos pos, boolean fill, boolean outline, int fillColor, int outlineColor)
```

### drawBox()

```java
default void drawBox(BlockPos pos, double expand, boolean fill, boolean outline, int fillColor, int outlineColor)
```

### drawBox()

```java
 void drawBox(BlockPos pos, double expand, boolean fill, boolean outline, float lineWidth, int fillColor, int outlineColor)
```

### drawBox()

```java
default void drawBox(Entity entity, float partialTicks, DrawMode drawMode)
```

### drawBox()

```java
default void drawBox(Entity entity, float partialTicks, boolean fill, boolean outline, int fillColor)
```

### drawBox()

```java
default void drawBox(Entity entity, float partialTicks, boolean fill, boolean outline, int fillColor, int outlineColor)
```

### drawBox()

```java
default void drawBox(double x, double y, double z, double width, double height, double depth, DrawMode drawMode)
```

### drawBox()

```java
default void drawBox(double x, double y, double z, double width, double height, double depth, boolean fill, boolean outline, int fillColor)
```

### drawBox()

```java
default void drawBox(double x, double y, double z, double width, double height, double depth, boolean fill, boolean outline, int fillColor, int outlineColor)
```

### drawBox()

```java
 void drawBox(double x, double y, double z, double width, double height, double depth, boolean fill, boolean outline, float lineWidth, int fillColor, int outlineColor)
```

### drawShape()

```java
default void drawShape(VoxelShape shape, double x, double y, double z, DrawMode drawMode)
```

### drawShape()

```java
default void drawShape(VoxelShape shape, double x, double y, double z, boolean fill, boolean outline, int fillColor)
```

### drawShape()

```java
default void drawShape(VoxelShape shape, double x, double y, double z, boolean fill, boolean outline, int fillColor, int outlineColor)
```

### drawShape()

```java
 void drawShape(VoxelShape shape, double x, double y, double z, boolean fill, boolean outline, float lineWidth, int fillColor, int outlineColor)
```

### drawQuad()

```java
default void drawQuad(Vec3 a, Vec3 b, Vec3 c, Vec3 d, int color)
```

### drawQuad()

```java
default void drawQuad(double aX, double aY, double aZ, double bX, double bY, double bZ, double cX, double cY, double cZ, double dX, double dY, double dZ, int color)
```

### drawQuad()

```java
 void drawQuad(double aX, double aY, double aZ, int aColor, double bX, double bY, double bZ, int bColor, double cX, double cY, double cZ, int cColor, double dX, double dY, double dZ, int dColor)
```

### drawPlane()

```java
default void drawPlane(double x, double y, double z, double width, double height, Direction direction, DrawMode drawMode)
```

### drawPlane()

```java
default void drawPlane(double x, double y, double z, double width, double height, Direction direction, boolean fill, boolean outline, int fillColor)
```

### drawPlane()

```java
default void drawPlane(double x, double y, double z, double width, double height, Direction direction, boolean fill, boolean outline, int fillColor, int outlineColor)
```

### projectToScreen()

```java
 Vec2 projectToScreen(Vec3 pos)
```

**Returns**: null if the position is off screen



**Returns:** `Vec2`

