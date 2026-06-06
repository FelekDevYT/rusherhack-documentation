# Waypoint

**Package:** `org.rusherhack.client.api.system.waypoint`

**Source:** `org/rusherhack/client/api/system/waypoint/Waypoint.java`

**Author:** john@rusherhack.org 6/29/2020 for rusherhack-rewrite



## Overview

`Waypoint` is a class and implements [INamed](/core/interfaces/INamed.md), [JsonSerializable](/core/serialize/JsonSerializable.md).

## Constructor

```java
public Waypoint(String name, String server, Vec3 pos, Dimension dimension)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| name | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| server | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| pos | `Vec3` | private |
| dimension | [Dimension](/client/api/utils/objects/Dimension.md) | private |
| enabled | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |


## Methods

### setName()

```java
public void setName(String name)
```

### setServer()

```java
public void setServer(String server)
```

### setPos()

```java
public void setPos(Vec3 pos)
```

### setDimension()

```java
public void setDimension(Dimension dimension)
```

### setEnabled()

```java
public void setEnabled(boolean enabled)
```

### getName()

```java
public String getName()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getServer()

```java
public String getServer()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getPos()

```java
public Vec3 getPos()
```

**Returns:** `Vec3`

### getDimension()

```java
public Dimension getDimension()
```

**Returns:** [Dimension](/client/api/utils/objects/Dimension.md)

### isEnabled()

```java
public boolean isEnabled()
```

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

