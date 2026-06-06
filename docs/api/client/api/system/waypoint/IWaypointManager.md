# IWaypointManager

**Package:** `org.rusherhack.client.api.system.waypoint`

**Source:** `org/rusherhack/client/api/system/waypoint/IWaypointManager.java`

Interface for the waypoint manager
* **Author:** john@rusherhack.org 12/9/2025



## Overview

`IWaypointManager` is a interface.

## Methods

### addWaypoint()

```java
 void addWaypoint(Waypoint waypoint)
```

Adds a waypoint

### removeWaypoint()

```java
 void removeWaypoint(Waypoint waypoint)
```

Removes a waypoint

### getWaypoints()

```java
 List<Waypoint> getWaypoints()
```

**Returns**: list of waypoints



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Waypoint](/client/api/system/waypoint/Waypoint.md)&gt;

### getWaypointForCurrentServer()

```java
 Waypoint getWaypointForCurrentServer(String waypoint)
```

**Returns**: a waypoint for the current server that matches the specified name



**Returns:** [Waypoint](/client/api/system/waypoint/Waypoint.md)

### getWaypointsForServer()

```java
 List<Waypoint> getWaypointsForServer(String server)
```

**Returns**: list of waypoints for the specified server



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[Waypoint](/client/api/system/waypoint/Waypoint.md)&gt;

