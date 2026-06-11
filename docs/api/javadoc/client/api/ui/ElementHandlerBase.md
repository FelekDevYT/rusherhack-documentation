# ElementHandlerBase

**Package:** `org.rusherhack.client.api.ui`

**Source:** `org/rusherhack/api/javadoc/client/api/ui/ElementHandlerBase.java`

A handler for managing multiple elements on screen.
* **Author:** John200410 3/5/2024



## Overview

`ElementHandlerBase` is a class and implements [Globals](/api/javadoc/client/api/Globals.md), [IRenderable2D](/api/javadoc/client/api/render/IRenderable2D.md), [IDraggable](/api/javadoc/core/interfaces/IDraggable.md), [IScrollable](/api/javadoc/core/interfaces/IScrollable.md), [ITypeable](/api/javadoc/core/interfaces/ITypeable.md), [ITickable](/api/javadoc/core/interfaces/ITickable.md), [JsonSerializable](/api/javadoc/core/serialize/JsonSerializable.md).

## Constructor

```java
public ElementHandlerBase(boolean scaledWithMinecraftGui)
```

**Parameter `scaledWithMinecraftGui`**: sets whether elements should be scaled with the minecraft gui



## Fields

| Name | Type | Modifiers |
|------|------|----------|
| scaledWithMinecraftGui | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private final |
| positionsInitialized | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | public |


## Methods

### getElements()

```java
public abstract List<T> getElements()
```

**Returns**: elements to be handled by this handler



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`T`&gt;

### getElement()

```java
public Optional<T> getElement(String name)
```

Finds an element given it's name
* **Parameter `name`**: name of the element


**Returns**: the element with the name or null if not found



**Returns:** [Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html)&lt;`T`&gt;

### initialize()

```java
public abstract void initialize()
```

Initialize all of the elements

### setDefaultPositions()

```java
public abstract void setDefaultPositions()
```

Sets the default positions of the elements

### moveElementToTop()

```java
public abstract void moveElementToTop(T element)
```

Moves the element to the top
* **Parameter `element`**: element to move to the top



### render()

```java
public void render(RenderContext context, double mouseX, double mouseY)
```

### renderElements()

```java
public void renderElements(RenderContext renderContext, double mouseX, double mouseY)
```

### tick()

```java
public void tick()
```

### mouseClicked()

```java
public boolean mouseClicked(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### mouseReleased()

```java
public void mouseReleased(double mouseX, double mouseY, int button)
```

### mouseMoved()

```java
public void mouseMoved(double mouseX, double mouseY)
```

### mouseScrolled()

```java
public boolean mouseScrolled(double mouseX, double mouseY, double delta)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### charTyped()

```java
public boolean charTyped(char character)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### keyTyped()

```java
public boolean keyTyped(int key, int scanCode, int modifiers)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isHovered()

```java
public boolean isHovered(double mouseX, double mouseY)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### renderElement()

```java
protected void renderElement(T element, RenderContext context, double mouseX, double mouseY)
```

### consumeMouseClick()

```java
protected boolean consumeMouseClick(double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeElementMouseClick()

```java
protected boolean consumeElementMouseClick(T element, double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeMouseRelease()

```java
protected void consumeMouseRelease(double mouseX, double mouseY, int button)
```

### consumeElementMouseRelease()

```java
protected boolean consumeElementMouseRelease(T element, double mouseX, double mouseY, int button)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeMouseMove()

```java
protected void consumeMouseMove(double mouseX, double mouseY)
```

### consumeElementMouseMove()

```java
protected boolean consumeElementMouseMove(T element, double mouseX, double mouseY)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeMouseScroll()

```java
protected boolean consumeMouseScroll(double mouseX, double mouseY, double delta)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeElementMouseScroll()

```java
protected boolean consumeElementMouseScroll(T element, double mouseX, double mouseY, double delta)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeElementCharTyped()

```java
protected boolean consumeElementCharTyped(T element, char character)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### consumeElementKeyTyped()

```java
protected boolean consumeElementKeyTyped(T element, int key, int scanCode, int modifiers)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getScale()

```java
public float getScale()
```

**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### isEnabled()

```java
protected boolean isEnabled(T element)
```

Checks if an element should have events sent to it
* **Parameter `element`**: element to check


@return

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isElementHovered()

```java
public boolean isElementHovered(T element, double mouseX, double mouseY)
```

Checks if an element is hovered. Can be overridden to change the hover behavior.
* **Parameter `element`**: the element


**Parameter `mouseX`**: the x-coordinate of the mouse


**Parameter `mouseY`**: the y-coordinate of the mouse


**Returns**: true if the window is hovered



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### serialize()

```java
public JsonElement serialize()
```

**Returns:** `JsonElement`

### deserialize()

```java
public boolean deserialize(JsonElement obj)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### shouldSerialize()

```java
public boolean shouldSerialize(boolean autosave)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

