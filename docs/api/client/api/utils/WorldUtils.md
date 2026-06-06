# WorldUtils

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/WorldUtils.java`

**Author:** John200410 6/18/2023



## Overview

`WorldUtils` is a class and implements [Globals](/client/api/Globals.md).

## Methods

### getMaxY()

```java
public static int getMaxY()
```

**Returns**: the max build height



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getMinY()

```java
public static int getMinY()
```

**Returns**: the min build height



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getEntities()

```java
public static List<Entity> getEntities()
```

**Returns**: all loaded entities



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Entity`&gt;

### getEntities()

```java
public static List<Entity> getEntities(Predicate<Entity> predicate)
```

**Returns**: all loaded entities



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Entity`&gt;

### getEntitiesSorted()

```java
public static List<Entity> getEntitiesSorted()
```

**Returns**: all loaded entities sorted by distance to camera



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Entity`&gt;

### getEntitiesSorted()

```java
public static List<Entity> getEntitiesSorted(Entity entity)
```

**Returns**: all loaded entities sorted by distance to entity



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Entity`&gt;

### getEntitiesSorted()

```java
public static List<Entity> getEntitiesSorted(Entity entity, Predicate<Entity> predicate)
```

**Returns**: all loaded entities sorted by distance to entity



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`Entity`&gt;

### getChunks()

```java
public static List<LevelChunk> getChunks()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`LevelChunk`&gt;

### getBlockEntities()

```java
public static List<BlockEntity> getBlockEntities(boolean sorted)
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`BlockEntity`&gt;

### getSphere()

```java
public static List<BlockPos> getSphere(Vec3i center, float sphereRadius)
```

**Returns**: a sphere of block positions



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`BlockPos`&gt;

### getSphere()

```java
public static List<BlockPos> getSphere(Vec3i center, float sphereRadius, Predicate<BlockPos> predicate)
```

**Parameter `predicate`**: a predicate for which all positions will be tested against


**Returns**: a sphere of block positions



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`BlockPos`&gt;

### getCircle()

```java
public static List<BlockPos> getCircle(Vec3i center, float circleRadius)
```

**Returns**: a circle of block positions



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`BlockPos`&gt;

### isReplaceble()

```java
public static boolean isReplaceble(BlockPos pos)
```

**Returns**: true if the position is air or contains a replaceable block



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### checkCollision()

```java
public static boolean checkCollision(BlockPos pos)
```

**Returns**: true if the position is free of entities that would prevent placing



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### checkCollision()

```java
public static boolean checkCollision(BlockPos pos, VoxelShape shape, Predicate<Entity> predicate)
```

**Parameter `shape`**: the shape in which we are checking for collision


**Parameter `predicate`**: a predicate for which all entities will be tested against


**Returns**: true if the position is free of entities that would prevent placing



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getBlockPos()

```java
public static BlockPos getBlockPos(Vec3 vec)
```

**Returns:** `BlockPos`

### isThundering()

```java
public static boolean isThundering()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isRaining()

```java
public static boolean isRaining()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

