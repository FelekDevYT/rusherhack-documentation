# PinnableWindow

**Package:** `org.rusherhack.client.api.feature.window`

**Source:** `org/rusherhack/client/api/feature/window/PinnableWindow.java`

A window that can be pinned to the screen
* **Author:** John200410 4/8/2024



## Overview

`PinnableWindow` is a class that extends [Window](/client/api/feature/window/Window.md) and implements [IPinnable](/core/interfaces/IPinnable.md).

## Constructor

```java
public PinnableWindow(String title, double width, double height)
```

```java
public PinnableWindow(String title, double x, double y, double width, double height)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| pinned | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### isPinned()

```java
public boolean isPinned()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setPinned()

```java
public void setPinned(boolean pinned)
```

### serialize()

```java
public JsonElement serialize()
```

**Returns:** `JsonElement`

### deserialize()

```java
public boolean deserialize(JsonElement jsonElement)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

