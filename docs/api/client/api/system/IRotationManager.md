# IRotationManager

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/IRotationManager.java`

**Author:** John200410 7/6/2023



## Overview

`IRotationManager` is a interface.

## Methods

### updateRotation()

```java
default void updateRotation(Entity entity)
```

### updateRotation()

```java
 void updateRotation(Entity entity, float step)
```

### updateRotation()

```java
default void updateRotation(BlockPos blockPos)
```

### updateRotation()

```java
default void updateRotation(BlockPos blockPos, float step)
```

### updateRotation()

```java
 void updateRotation(BlockPos blockPos, Direction direction, float step)
```

### updateRotation()

```java
 void updateRotation(BlockHitResult hitResult, float step)
```

### updateRotation()

```java
default void updateRotation(float yaw, float pitch)
```

### updateRotation()

```java
 void updateRotation(float yaw, float pitch, float step)
```

### isLookingAt()

```java
 boolean isLookingAt(Entity entity)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isLookingAt()

```java
default boolean isLookingAt(BlockHitResult hitResult)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isLookingAt()

```java
default boolean isLookingAt(BlockHitResult hitResult, boolean checkDirection)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isLookingAt()

```java
default boolean isLookingAt(BlockPos blockPos)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isLookingAt()

```java
 boolean isLookingAt(BlockPos blockPos, Direction direction)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getLookRaycast()

```java
 BlockHitResult getLookRaycast(BlockPos blockPos)
```

**Returns:** `BlockHitResult`

