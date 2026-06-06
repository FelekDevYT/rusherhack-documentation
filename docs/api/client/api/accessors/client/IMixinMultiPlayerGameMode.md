# IMixinMultiPlayerGameMode

**Package:** `org.rusherhack.client.api.accessors.client`

**Source:** `org/rusherhack/client/api/accessors/client/IMixinMultiPlayerGameMode.java`

**Author:** John200410 7/28/2023



## Overview

`IMixinMultiPlayerGameMode` is a interface.

## Methods

### getConnection()

```java
 ClientPacketListener getConnection()
```

**Returns:** `ClientPacketListener`

### getDestroyBlockPos()

```java
 BlockPos getDestroyBlockPos()
```

**Returns:** `BlockPos`

### getDestroyProgress()

```java
 float getDestroyProgress()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setDestroyProgress()

```java
 void setDestroyProgress(float destroyProgress)
```

### getDestroyDelay()

```java
 int getDestroyDelay()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setDestroyDelay()

```java
 void setDestroyDelay(int destroyDelay)
```

### setIsDestroying()

```java
 void setIsDestroying(boolean isDestroying)
```

### invokeStartPrediction()

```java
 void invokeStartPrediction(ClientLevel level, PredictiveAction action)
```

### invokeEnsureHasSentCarriedItem()

```java
 void invokeEnsureHasSentCarriedItem()
```

### invokePerformUseItemOn()

```java
 InteractionResult invokePerformUseItemOn(LocalPlayer player, InteractionHand hand, BlockHitResult result)
```

**Returns:** `InteractionResult`

