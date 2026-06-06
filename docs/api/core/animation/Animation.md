# Animation

**Package:** `org.rusherhack.core.animation`

**Source:** `org/rusherhack/core/animation/Animation.java`

Animation object that can be used to animate a value and track it's progress
* **Author:** John200410 2/12/2023



## Overview

`Animation` is a class.

## Constructor

```java
public Animation()
```

```java
public Animation(Easing tween, long durationMs)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| tween | [Easing](/core/animation/Easing.md) | private |
| playing | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| reverse | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| loop | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| duration | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private |
| lastTime | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private |
| timePassed | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private |
| progress | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private |


## Methods

### get()

```java
public double get()
```

**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### play()

```java
public Animation play()
```

Start the animation

**Returns:** [Animation](/core/animation/Animation.md)

### restart()

```java
public Animation restart()
```

Restart the animation

**Returns:** [Animation](/core/animation/Animation.md)

### reverse()

```java
public Animation reverse()
```

Reverse the animation

**Returns:** [Animation](/core/animation/Animation.md)

### setLoop()

```java
public Animation setLoop(boolean loop)
```

**Returns:** [Animation](/core/animation/Animation.md)

### setDirection()

```java
public Animation setDirection(boolean reverse)
```

**Returns:** [Animation](/core/animation/Animation.md)

### setDuration()

```java
public Animation setDuration(long durationMs)
```

Set the animation duration in milliseconds
* **Parameter `durationMs`**: the duration in milliseconds



**Returns:** [Animation](/core/animation/Animation.md)

### setTween()

```java
public Animation setTween(Easing tween)
```

Set the animation tween

**Returns:** [Animation](/core/animation/Animation.md)

### isPlaying()

```java
public boolean isPlaying()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isReversed()

```java
public boolean isReversed()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

