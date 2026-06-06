# EventRenderBlockEntity

**Package:** `org.rusherhack.client.api.events.render`

**Source:** `org/rusherhack/client/api/events/render/EventRenderBlockEntity.java`

**Author:** John200410 12/13/2023



## Overview

`EventRenderBlockEntity` is a class that extends `EventCancellable`.

## Constructor

```java
public EventRenderBlockEntity(BlockEntity blockEntity, BlockEntityRenderState renderState, float partialTicks, PoseStack poseStack, SubmitNodeCollector nodeCollector, int packedLight, boolean worldRender)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| blockEntity | `BlockEntity` | private final |
| renderState | `BlockEntityRenderState` | private final |
| partialTicks | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private final |
| poseStack | `PoseStack` | private final |
| nodeCollector | `SubmitNodeCollector` | private |
| packedLight | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| worldRender | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |


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

### getBlockEntity()

```java
public BlockEntity getBlockEntity()
```

**Returns:** `BlockEntity`

### getRenderState()

```java
public BlockEntityRenderState getRenderState()
```

**Returns:** `BlockEntityRenderState`

### getPartialTicks()

```java
public float getPartialTicks()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### getPoseStack()

```java
public PoseStack getPoseStack()
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

### getPackedLight()

```java
public int getPackedLight()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### isWorldRender()

```java
public boolean isWorldRender()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

