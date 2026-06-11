# RusherHackAPI

**Package:** `org.rusherhack.client.api`

**Source:** `org/rusherhack/api/javadoc/client/api/RusherHackAPI.java`

RusherHack public API accessor
TODO: javadocs
* **Author:** John200410 12/29/2022



## Overview

`RusherHackAPI` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| PLUGINS_ENABLED | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | public static final |
| rusherhack | [IRusherHack](/api/javadoc/client/api/IRusherHack.md) | private static |


## Methods

### getEventBus()

```java
public static IEventBus getEventBus()
```

**Returns**: The event bus used to subscribe to events



**Returns:** `IEventBus`

### createLogger()

```java
public static ILogger createLogger(String name)
```

Creates a logger with the specified name

**Returns:** [ILogger](/api/javadoc/core/logging/ILogger.md)

### getVersion()

```java
public static String getVersion()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getPath()

```java
public static Path getPath()
```

**Returns:** [Path](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html)

### getConfigPath()

```java
public static Path getConfigPath()
```

**Returns:** [Path](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html)

### getConfigManager()

```java
public static IConfigManager getConfigManager()
```

**Returns:** [IConfigManager](/api/javadoc/client/api/system/IConfigManager.md)

### getRegistry()

```java
public static IRusherHackRegistry getRegistry()
```

**Returns:** [IRusherHackRegistry](/api/javadoc/client/api/system/IRusherHackRegistry.md)

### getFieldRegistry()

```java
public static IFieldRegistry getFieldRegistry()
```

**Returns:** [IFieldRegistry](/api/javadoc/client/api/system/IFieldRegistry.md)

### getModuleManager()

```java
public static IFeatureManager<IModule> getModuleManager()
```

**Returns:** [IFeatureManager](/api/javadoc/core/feature/IFeatureManager.md)&lt;[IModule](/api/javadoc/client/api/feature/module/IModule.md)&gt;

### getCommandManager()

```java
public static ICommandManager getCommandManager()
```

**Returns:** [ICommandManager](/api/javadoc/core/command/ICommandManager.md)

### getHudManager()

```java
public static IHudManager getHudManager()
```

**Returns:** [IHudManager](/api/javadoc/client/api/system/IHudManager.md)

### getWindowManager()

```java
public static IWindowManager getWindowManager()
```

**Returns:** [IWindowManager](/api/javadoc/client/api/system/IWindowManager.md)

### getThemeManager()

```java
public static IThemeManager getThemeManager()
```

**Returns:** [IThemeManager](/api/javadoc/client/api/ui/theme/IThemeManager.md)

### getBindManager()

```java
public static IBindManager getBindManager()
```

**Returns:** [IBindManager](/api/javadoc/client/api/bind/IBindManager.md)

### getRelationManager()

```java
public static IRelationManager getRelationManager()
```

**Returns:** [IRelationManager](/api/javadoc/client/api/system/IRelationManager.md)

### getWaypointManager()

```java
public static IWaypointManager getWaypointManager()
```

**Returns:** [IWaypointManager](/api/javadoc/client/api/system/waypoint/IWaypointManager.md)

### getRotationManager()

```java
public static IRotationManager getRotationManager()
```

**Returns:** [IRotationManager](/api/javadoc/client/api/system/IRotationManager.md)

### getNotificationManager()

```java
public static INotificationManager getNotificationManager()
```

**Returns:** [INotificationManager](/api/javadoc/client/api/system/INotificationManager.md)

### getChunkProcessor()

```java
public static IChunkProcessor getChunkProcessor()
```

**Returns:** [IChunkProcessor](/api/javadoc/client/api/system/IChunkProcessor.md)

### getServerState()

```java
public static IServerState getServerState()
```

**Returns:** [IServerState](/api/javadoc/client/api/system/IServerState.md)

### interactions()

```java
public static IInteractions interactions()
```

**Returns:** [IInteractions](/api/javadoc/client/api/system/IInteractions.md)

### getRenderer2D()

```java
public static IRenderer2D getRenderer2D()
```

**Returns:** [IRenderer2D](/api/javadoc/client/api/render/IRenderer2D.md)

### getRenderer3D()

```java
public static IRenderer3D getRenderer3D()
```

**Returns:** [IRenderer3D](/api/javadoc/client/api/render/IRenderer3D.md)

### fonts()

```java
public static Fonts fonts()
```

**Returns:** [Fonts](/api/javadoc/client/api/system/Fonts.md)

### colors()

```java
public static Colors colors()
```

**Returns:** [Colors](/api/javadoc/client/api/system/Colors.md)

### entities()

```java
public static Entities entities()
```

**Returns:** [Entities](/api/javadoc/client/api/system/Entities.md)

### schedule()

```java
public static void schedule(Runnable runnable)
```

Schedules a task to be run on the next iteration of the game loop
@param runnable

### getLanguage()

```java
public static Language getLanguage()
```

**Returns:** `Language`

### sendNotification()

```java
public static void sendNotification(NotificationType type, String text)
```

### sendNotification()

```java
public static void sendNotification(NotificationType type, String prefix, String text)
```

