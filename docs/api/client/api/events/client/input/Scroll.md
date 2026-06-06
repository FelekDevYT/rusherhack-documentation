# Scroll

**Package:** `org.rusherhack.client.api.events.client.input`

**Source:** `org/rusherhack/client/api/events/client/input/EventMouse.java`

This event is called when the scroll wheel is used

## Overview

`Scroll` is a class that extends [EventMouse](/client/api/events/client/input/EventMouse.md).

## Constructor

```java
public Scroll(double xOffset, double yOffset)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| xOffset | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |
| yOffset | [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html) | private final |


## Methods

### getScrollDeltaX()

```java
public double getScrollDeltaX()
```

**Returns**: Horizontal scroll offset



**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

### getScrollDeltaY()

```java
public double getScrollDeltaY()
```

**Returns**: Vertical scroll offset



**Returns:** [double](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Double.html)

