# FormBuilder

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/WebUtils.java`

## Overview

`FormBuilder` is a class.

## Constructor

```java
private FormBuilder()
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| map | [LinkedHashMap](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt; | private final |


## Methods

### create()

```java
public static FormBuilder create()
```

**Returns:** [FormBuilder](/client/api/utils/FormBuilder.md)

### add()

```java
public FormBuilder add(String key, String value)
```

**Returns:** [FormBuilder](/client/api/utils/FormBuilder.md)

### build()

```java
public String build()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### buildPublisher()

```java
public HttpRequest.BodyPublisher buildPublisher()
```

**Returns:** `HttpRequest.BodyPublisher`

