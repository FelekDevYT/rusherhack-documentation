# EventRenderEntity

**Package:** `org.rusherhack.client.api.events.render`

**Source:** `org/rusherhack/client/api/events/render/EventRenderEntity.java`

**Author:** John200410 7/6/2023



## Overview

`EventRenderEntity` is a class that extends `EventCancellable`.

## Constructor

```java
public EventRenderEntity(Entity entity, double x, double y, double z, float rotationYaw, float partialTicks, PoseStack matrixStack, SubmitNodeCollector nodeCollector, int packedLight)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| entity | `Entity` | private final |
| x | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |
| y | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |
| z | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |
| rotationYaw | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private final |
| partialTicks | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private final |
| matrixStack | `PoseStack` | private final |
| nodeCollector | `SubmitNodeCollector` | private |
| packedLight | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| shouldRenderModel | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

### getStage()

```java
public Stage getStage()
```

**Returns:** `Stage`

### getEntity()

```java
public Entity getEntity()
```

**Returns:** `Entity`

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

### getZ()

```java
public double getZ()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getRotationYaw()

```java
public float getRotationYaw()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### getPartialTicks()

```java
public float getPartialTicks()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### getMatrixStack()

```java
public PoseStack getMatrixStack()
```

**Returns:** `PoseStack`

### getNodeCollector()

```java
public SubmitNodeCollector getNodeCollector()
```

**Returns:** `SubmitNodeCollector`

### setNodeCollector()

```java
public void setNodeCollector(SubmitNodeCollector nodeCollector)
```

Only applies during ON stage

### setRenderModel()

```java
public void setRenderModel(boolean shouldRenderModel)
```

### shouldRenderModel()

```java
public boolean shouldRenderModel()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getPackedLight()

```java
public int getPackedLight()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

