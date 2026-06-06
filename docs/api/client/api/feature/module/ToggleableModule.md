# ToggleableModule

**Package:** `org.rusherhack.client.api.feature.module`

**Source:** `org/rusherhack/client/api/feature/module/ToggleableModule.java`

A module that can be toggled
* **Author:** John200410 1/17/2023



## Overview

`ToggleableModule` is a class that extends [Module](/client/api/feature/module/Module.md) and implements [IToggleable](/core/interfaces/IToggleable.md), [IBindable](/core/bind/IBindable.md).

## Constructor

```java
public ToggleableModule(String name, ModuleCategory category)
```

```java
public ToggleableModule(String name, String description, ModuleCategory category)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| toggled | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### toggle()

```java
public void toggle()
```

### isToggled()

```java
public boolean isToggled()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### setToggled()

```java
public void setToggled(boolean toggled)
```

### onEnable()

```java
public void onEnable()
```

Called when the module is enabled.



Avoid referencing the world or player here, because modules can be toggled while they are null.

### onDisable()

```java
public void onDisable()
```

Called when the module is disabled.



Avoid referencing the world or player here, because modules can be toggled while they are null.

### onKeybindEvent()

```java
public void onKeybindEvent()
```

### getBindReference()

```java
public String getBindReference()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### isListening()

```java
public boolean isListening()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

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

