# BindManagerBase

**Package:** `org.rusherhack.core.bind`

**Source:** `org/rusherhack/api/javadoc/core/bind/BindManagerBase.java`

Class to handle keybindings
* **Author:** John200410 1/16/2023



## Overview

`BindManagerBase` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| BIND_REGISTRY | `Object2ObjectMap`&lt;[IBindable](/api/javadoc/core/bind/IBindable.md), [IKey](/api/javadoc/core/bind/key/IKey.md)&gt; | private final |


## Methods

### register()

```java
public void register(IBindable bindable, IKey key)
```

### unregister()

```java
public void unregister(IBindable bindable)
```

### setBind()

```java
public void setBind(IBindable bindable, IKey key)
```

### setBind()

```java
public void setBind(String bindableName, IKey key)
```

### getBind()

```java
public IKey getBind(IBindable bindable)
```

**Returns:** [IKey](/api/javadoc/core/bind/key/IKey.md)

### getBindRegistry()

```java
public Object2ObjectMap<IBindable, IKey> getBindRegistry()
```

**Returns:** `Object2ObjectMap`&lt;[IBindable](/api/javadoc/core/bind/IBindable.md), [IKey](/api/javadoc/core/bind/key/IKey.md)&gt;

