# IMixinConnection

**Package:** `org.rusherhack.client.api.accessors.client`

**Source:** `org/rusherhack/client/api/accessors/client/IMixinConnection.java`

**Author:** John200410 9/15/2023



## Overview

`IMixinConnection` is a interface.

## Methods

### getChannel()

```java
 Channel getChannel()
```

**Returns:** [Channel](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channel.html)

### invokeDoSendPacket()

```java
 void invokeDoSendPacket(Packet<?> packet, ChannelFutureListener sendListener, boolean flush)
```

### invokeChannelRead0()

```java
 void invokeChannelRead0(ChannelHandlerContext context, Packet<?> packet)
```

### invokeGenericsFtw()

```java
static void invokeGenericsFtw(Packet<T> packet, PacketListener listener)
```

