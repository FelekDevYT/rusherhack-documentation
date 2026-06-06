# UUIDSerializer

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/WebUtils.java`

Utility class for serializing and deserializing UUIDs.

## Overview

`UUIDSerializer` is a class that extends `TypeAdapter`.

## Methods

### write()

```java
public void write(JsonWriter out, UUID value)
```

### read()

```java
public UUID read(JsonReader in)
```

**Returns:** [UUID](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html)

### fromString()

```java
public static UUID fromString(String value)
```

Converts a String to a UUID.
* **Parameter `value`**: String to convert.


**Returns**: The resulting UUID.



**Returns:** [UUID](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html)

### fromUUID()

```java
public static String fromUUID(UUID value)
```

Converts a UUID to a String.
* **Parameter `value`**: UUID to convert.


**Returns**: The resulting String.



**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

