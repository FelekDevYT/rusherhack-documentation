# IScrollable

**Package:** `org.rusherhack.core.interfaces`

**Source:** `org/rusherhack/core/interfaces/IScrollable.java`

Interface for objects that have a scrollable component
* **Author:** John200410 2/10/2023



## Overview

`IScrollable` is a interface that extends [IHoverable](/core/interfaces/IHoverable.md).

## Methods

### mouseScrolled()

```java
 boolean mouseScrolled(double mouseX, double mouseY, double delta)
```

Called when the mouse is scrolled
* **Parameter `mouseX`**: the x-coordinate of the mouse


**Parameter `mouseY`**: the y-coordinate of the mouse


**Parameter `delta`**: the scroll delta


**Returns**: if the scroll was consumed



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

