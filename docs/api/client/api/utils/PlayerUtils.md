# PlayerUtils

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/PlayerUtils.java`

Helper class containing player related functions
* **Author:** John200410 6/5/2023



## Overview

`PlayerUtils` is a class and implements [Globals](/client/api/Globals.md).

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| fallDistance | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private static |


## Methods

### getCurrentSpeed()

```java
public static double getCurrentSpeed()
```

Get current horizontal speed

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### onMove()

```java
private static void onMove(EventMove event)
```

### getDirectionalSpeed()

```java
public static double[] getDirectionalSpeed(double speed)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)[]

### getDirectionalSpeed()

```java
public static double[] getDirectionalSpeed(float yaw, double speed)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)[]

### getDirectionalSpeed()

```java
public static double[] getDirectionalSpeed(LocalPlayer player, float yaw, double speed)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)[]

### getDirectionalSpeed()

```java
public static double[] getDirectionalSpeed(LocalPlayer player, float yaw, double speed, float forward, float strafe)
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)[]

### getInput()

```java
public static PlayerInput getInput()
```

**Returns:** [PlayerInput](/client/api/utils/objects/PlayerInput.md)

### getInput()

```java
public static PlayerInput getInput(LocalPlayer player)
```

**Returns:** [PlayerInput](/client/api/utils/objects/PlayerInput.md)

### hasHorizontalInput()

```java
public static boolean hasHorizontalInput()
```

@deprecated use [PlayerInput](/client/api/utils/objects/PlayerInput.md)#hasHorizontalInput()

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getFallDistance()

```java
public static float getFallDistance()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setFallDistance()

```java
public static void setFallDistance(float distance)
```

### getEyeBlockPos()

```java
public static BlockPos getEyeBlockPos()
```

**Returns:** `BlockPos`

### isStuck()

```java
public static boolean isStuck()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getArmorStacks()

```java
public static List<ItemStack> getArmorStacks()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`ItemStack`&gt;

### getArmorStacks()

```java
public static List<ItemStack> getArmorStacks(LivingEntity entity)
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`ItemStack`&gt;

### getBlockReach()

```java
public static double getBlockReach()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getEntityReach()

```java
public static double getEntityReach()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

