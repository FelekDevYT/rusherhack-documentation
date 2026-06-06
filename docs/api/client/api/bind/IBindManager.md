# IBindManager

**Package:** `org.rusherhack.client.api.bind`

**Source:** `org/rusherhack/client/api/bind/IBindManager.java`

**Author:** John200410 10/24/2023



## Overview

`IBindManager` is a interface.

## Methods

### register()

```java
default void register(IBindable bindable)
```

### register()

```java
 void register(IBindable bindable, IKey key)
```

### unregister()

```java
 void unregister(IBindable bindable)
```

### setBind()

```java
 void setBind(IBindable bindable, IKey key)
```

### setBind()

```java
 void setBind(String bindableName, IKey key)
```

### getBind()

```java
 IKey getBind(IBindable bindable)
```

**Returns:** [IKey](/core/bind/key/IKey.md)

### getBindRegistry()

```java
 Object2ObjectMap<IBindable, IKey> getBindRegistry()
```

**Returns:** `Object2ObjectMap`&lt;[IBindable](/core/bind/IBindable.md), [IKey](/core/bind/key/IKey.md)&gt;

### parseKey()

```java
 IKey parseKey(String key)
```

Creates a key object from the specified key string
* **Returns**: the key



**Returns:** [IKey](/core/bind/key/IKey.md)

### createKeyboardKey()

```java
 IKey createKeyboardKey(int keyCode)
```

Creates a new keyboard key from the specified glfw key code
* **Parameter `keyCode`**: the glfw key code


**Returns**: the key object



**Returns:** [IKey](/core/bind/key/IKey.md)

### createMouseKey()

```java
 IKey createMouseKey(int keyCode)
```

Creates a new mouse key from the specified glfw key code
* **Parameter `keyCode`**: the glfw key code


**Returns**: the key object



**Returns:** [IKey](/core/bind/key/IKey.md)

