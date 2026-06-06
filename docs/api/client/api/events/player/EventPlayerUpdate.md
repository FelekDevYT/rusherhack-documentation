# EventPlayerUpdate

**Package:** `org.rusherhack.client.api.events.player`

**Source:** `org/rusherhack/client/api/events/player/EventPlayerUpdate.java`

This event is called when the game is preparing to send player updates to the server.



Used modify the player's position, rotation, and on-ground state for the tick. Player states revert after POST stage is posted.
* **Author:** John200410 6/2/2023



## Overview

`EventPlayerUpdate` is a class that extends `EventCancellable`.

## Constructor

```java
public EventPlayerUpdate(LocalPlayer player)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| player | `LocalPlayer` | private final |
| yaw | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private |
| pitch | [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html) | private |
| x | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| y | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| z | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |
| onGround | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| horizontalCollision | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### getPlayer()

```java
public LocalPlayer getPlayer()
```

**Returns:** `LocalPlayer`

### getYaw()

```java
public float getYaw()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setYaw()

```java
public void setYaw(float yaw)
```

### getPitch()

```java
public float getPitch()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### setPitch()

```java
public void setPitch(float pitch)
```

### getX()

```java
public double getX()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### setX()

```java
public void setX(double x)
```

### getY()

```java
public double getY()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### setY()

```java
public void setY(double y)
```

### getZ()

```java
public double getZ()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### setZ()

```java
public void setZ(double z)
```

### isOnGround()

```java
public boolean isOnGround()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setOnGround()

```java
public void setOnGround(boolean onGround)
```

### getHorizontalCollision()

```java
public boolean getHorizontalCollision()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setHorizontalCollision()

```java
public void setHorizontalCollision(boolean horizontalCollision)
```

### getStage()

```java
public Stage getStage()
```

`Stage`#PRE - called before the client sends player update to server



`Stage`#POST - called at the end of the local player tick

**Returns:** `Stage`

### getPreferredStage()

```java
public Stage getPreferredStage()
```

**Returns:** `Stage`

