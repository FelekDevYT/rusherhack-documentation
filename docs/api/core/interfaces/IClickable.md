# IClickable

**Package:** `org.rusherhack.core.interfaces`

**Source:** `org/rusherhack/core/interfaces/IClickable.java`

## Overview

`IClickable` is a interface that extends [IHoverable](/core/interfaces/IHoverable.md).

## Methods

### mouseClicked()

```java
 boolean mouseClicked(double mouseX, double mouseY, int button)
```

Called when a mouse button is clicked
* **Parameter `button`**: mouse button that was clicked


**Returns**: if the click was consumed



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
default void mouseReleased(double mouseX, double mouseY, int button)
```

Called when a mouse button is released
* **Parameter `button`**: mouse button that was released



