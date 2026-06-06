# Timer

**Package:** `org.rusherhack.core.utils`

**Source:** `org/rusherhack/core/utils/Timer.java`

A simple timer
* **Author:** John200410



## Overview

`Timer` is a class.

## Constructor

```java
public Timer()
```

```java
public Timer(long startTime)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| time | [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html) | private |


## Methods

### reset()

```java
public void reset()
```

Resets the timer

### passed()

```java
public boolean passed(double ms)
```

Checks if the timer has reached the specified time
* **Parameter `ms`**: time in milliseconds


**Returns**: true if the timer has reached the specified time



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### ticksPassed()

```java
public boolean ticksPassed(int gameTicks)
```

Checks if the timer has reached the specified time
* **Parameter `gameTicks`**: time in minecraft game ticks (20 ticks = 1 second)


**Returns**: true if the timer has reached the specified time



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getTime()

```java
public long getTime()
```

**Returns**: how long this timer has been active in milliseconds



**Returns:** [long](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Long.html)

### getTicksPassed()

```java
public int getTicksPassed()
```

**Returns**: how long this timer has been active in game ticks (20 ticks per second)



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setTime()

```java
public void setTime(long time)
```

