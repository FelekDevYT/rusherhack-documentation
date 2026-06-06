# IRelationManager

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/client/api/system/IRelationManager.java`

**Author:** John200410 6/21/2023



## Overview

`IRelationManager` is a interface.

## Methods

### isFriend()

```java
 boolean isFriend(String username)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isFriend()

```java
default boolean isFriend(Entity entity)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isEnemy()

```java
 boolean isEnemy(String username)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isEnemy()

```java
default boolean isEnemy(Entity entity)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### addFriend()

```java
 void addFriend(String username)
```

### addFriend()

```java
default void addFriend(Entity entity)
```

### addEnemy()

```java
 void addEnemy(String username)
```

### addEnemy()

```java
default void addEnemy(Entity entity)
```

### removeFriend()

```java
 void removeFriend(String username)
```

### removeFriend()

```java
default void removeFriend(Entity entity)
```

### removeEnemy()

```java
 void removeEnemy(String username)
```

### removeEnemy()

```java
default void removeEnemy(Entity entity)
```

### getFriends()

```java
 List<PlayerRelation> getFriends()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[PlayerRelation](/client/api/utils/objects/PlayerRelation.md)&gt;

### getEnemies()

```java
 List<PlayerRelation> getEnemies()
```

**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;[PlayerRelation](/client/api/utils/objects/PlayerRelation.md)&gt;

