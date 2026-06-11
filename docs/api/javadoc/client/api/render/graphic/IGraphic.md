# IGraphic

**Package:** `org.rusherhack.client.api.render.graphic`

**Source:** `org/rusherhack/api/javadoc/client/api/render/graphic/IGraphic.java`

Interface for graphics that can be rendered
* **Author:** John200410 1/31/2023



## Overview

`IGraphic` is a interface.

## Methods

### openInputStream()

```java
 InputStream openInputStream()
```

Opens a fresh input stream for this graphic's source data.

**Returns:** [InputStream](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html)

### getInputStream()

```java
default InputStream getInputStream()
```

@deprecated Use ``#openInputStream().

**Returns:** [InputStream](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html)

### getWidth()

```java
 int getWidth()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getHeight()

```java
 int getHeight()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getXOffset()

```java
 int getXOffset()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getYOffset()

```java
 int getYOffset()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

