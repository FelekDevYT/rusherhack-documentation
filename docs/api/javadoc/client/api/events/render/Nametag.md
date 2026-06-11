# Nametag

**Package:** `org.rusherhack.client.api.events.render`

**Source:** `org/rusherhack/api/javadoc/client/api/events/render/EventRenderEntity.java`

## Overview

`Nametag` is a class that extends `EventCancellable`.

## Constructor

```java
public Nametag(Entity entity, Component displayName, PoseStack matrixStack, SubmitNodeCollector nodeCollector, int packedLight)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| entity | `Entity` | private final |
| displayName | `Component` | private |
| matrixStack | `PoseStack` | private final |
| nodeCollector | `SubmitNodeCollector` | private final |
| packedLight | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getStage()

```java
public Stage getStage()
```

**Returns**: PRE or POST



**Returns:** `Stage`

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

### getEntity()

```java
public Entity getEntity()
```

**Returns:** `Entity`

### getDisplayName()

```java
public Component getDisplayName()
```

**Returns:** `Component`

### setDisplayName()

```java
public void setDisplayName(Component displayName)
```

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

### getPackedLight()

```java
public int getPackedLight()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

