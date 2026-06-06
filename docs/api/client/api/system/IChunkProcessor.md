# IChunkProcessor

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/IChunkProcessor.java`

Interface for accessing the rusherhack chunk processor
* **Author:** John200410 7/6/2024



## Overview

`IChunkProcessor` is a interface.

## Methods

### registerProcessee()

```java
 void registerProcessee(Processee processee)
```

Add a processee to the chunk processor
* @param processee

### reloadChunks()

```java
 void reloadChunks()
```

Tells the chunk processor to re-scan every chunk in render distance

### scanChunk()

```java
 void scanChunk(ChunkPos chunkPos, Predicate<BlockState> predicate, Consumer<HashMap<BlockPos, BlockState>> consumer)
```

Scans a chunk for blocks that match the predicate
* **Parameter `chunkPos`**: @param predicate


@param consumer

