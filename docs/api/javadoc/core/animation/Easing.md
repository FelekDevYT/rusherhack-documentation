# Easing

**Package:** `org.rusherhack.core.animation`

**Source:** `org/rusherhack/api/javadoc/core/animation/Easing.java`

Various easing functions to use for animations
* 
@see [https://easings.net/](https://easings.net/)**Author:** John200410 2/12/2023



## Overview

`Easing` is a enum and implements [Function](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Function.html).

## Constructor

```java
 Easing(Function<Double, Double> translator)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| function | [Function](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Function.html)&lt;[Double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html), [Double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)&gt; | private final |


## Constants

### LINEAR

Arguments: x -> x

### EASE_IN

Arguments: x -> 1 - Math.cos(x * Math.PI / 2)

### EASE_OUT

Arguments: x -> Math.sin(x * Math.PI / 2)

### EASE_IN_OUT

Arguments: x -> -(Math.cos(Math.PI * x) - 1) / 2

### BEZIER_CURVE

Arguments: x -> {
    final double curve = -1 + Math.sqrt(-x + 1);
    return curve * curve;
}

### SINE_PULSE

A sine wave that pulses twice

Arguments: x -> (Math.sin((x - 0.5) * Math.PI * 3) + 1) / 2

## Methods

### apply()

```java
public Double apply(Double input)
```

**Returns:** [Double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

