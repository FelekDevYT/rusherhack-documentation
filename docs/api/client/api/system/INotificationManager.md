# INotificationManager

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/INotificationManager.java`

Interface for sending notifications to the client
* **Author:** John200410



## Overview

`INotificationManager` is a interface that extends [ILog](/core/logging/ILog.md).

## Methods

### shouldNotifyModuleToggles()

```java
 boolean shouldNotifyModuleToggles()
```

**Returns**: true if module toggle notifications are enabled



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### send()

```java
default void send(NotificationType type, String text)
```

### send()

```java
default void send(NotificationType type, Component text)
```

### send()

```java
default void send(NotificationType type, String prefix, String text)
```

### send()

```java
default void send(NotificationType type, String prefix, Component text)
```

### send()

```java
default void send(NotificationType type, String text, int id)
```

### send()

```java
default void send(NotificationType type, Component text, int id)
```

### send()

```java
default void send(NotificationType type, String prefix, String text, int id)
```

### send()

```java
 void send(NotificationType type, String prefix, Component text, int id)
```

### chat()

```java
default void chat(String string)
```

### chat()

```java
default void chat(String string, Style textStyle)
```

### chat()

```java
default void chat(Component component)
```

### chat()

```java
 void chat(Component component, int tagColor, Style prefixStyle, int id)
```

### info()

```java
default void info(String message)
```

### warn()

```java
default void warn(String message)
```

### error()

```java
default void error(String message)
```

### debug()

```java
default void debug(String message)
```

