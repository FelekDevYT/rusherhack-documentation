# AbstractGraphic

**Package:** `org.rusherhack.client.api.render.graphic`

**Source:** `org/rusherhack/api/javadoc/client/api/render/graphic/AbstractGraphic.java`

Base implementation for graphics backed by in-memory bytes.
* **Author:** john@rusherhack.org 4/26/2026



## Overview

`AbstractGraphic` is a class and implements [IGraphic](/api/javadoc/client/api/render/graphic/IGraphic.md).

## Constructor

```java
protected AbstractGraphic(InputStream inputStream, int width, int height, int xOffset, int yOffset)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| data | [byte](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Byte.html) | private final |
| width | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| height | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| xOffset | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| yOffset | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### openInputStream()

```java
public InputStream openInputStream()
```

**Returns:** [InputStream](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html)

### getWidth()

```java
public int getWidth()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getHeight()

```java
public int getHeight()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getXOffset()

```java
public int getXOffset()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getYOffset()

```java
public int getYOffset()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

