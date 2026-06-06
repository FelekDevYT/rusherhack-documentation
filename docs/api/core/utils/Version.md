# Version

**Package:** `org.rusherhack.core.utils`

**Source:** `org/rusherhack/core/utils/Version.java`

**Author:** John200410 6/2/2024



## Overview

`Version` is a class and implements [Comparable](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Comparable.html).

## Constructor

```java
public Version(int major, int minor, int patch)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| major | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| minor | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| patch | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |


## Methods

### getMajor()

```java
public int getMajor()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getMinor()

```java
public int getMinor()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getPatch()

```java
public int getPatch()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getString()

```java
public String getString(boolean includeNullPatch)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### toString()

```java
public String toString()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### equals()

```java
public boolean equals(Object obj)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### hashCode()

```java
public int hashCode()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### fromString()

```java
public static Version fromString(String version)
```

**Returns:** [Version](/core/utils/Version.md)

### compareTo()

```java
public int compareTo(Version other)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

