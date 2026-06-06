# IOUtils

**Package:** `org.rusherhack.core.utils`

**Source:** `org/rusherhack/core/utils/IOUtils.java`

Helper class containing IO related functions
* **Author:** John200410



## Overview

`IOUtils` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| LOG_DATE_FORMAT | `SimpleDateFormat` | public static final |


## Methods

### toString()

```java
public static String toString(InputStream stream, boolean newLines)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### readStringFromFile()

```java
public static String readStringFromFile(File file, boolean newLines)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### writeStringToFile()

```java
public static void writeStringToFile(File file, String message, boolean lineSeparator, boolean clean)
```

### writeToFile()

```java
public static void writeToFile(File file, InputStream inputStream)
```

### createFile()

```java
public static boolean createFile(File file)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

