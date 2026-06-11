# IFieldRegistry

**Package:** `org.rusherhack.client.api.system`

**Source:** `org/rusherhack/api/javadoc/client/api/system/IFieldRegistry.java`

Interface for the field registry



Allows plugins to read some fields for internal rusherhack objects, like modules
* **Author:** john@rusherhack.org 12/9/2025



## Overview

`IFieldRegistry` is a interface.

## Methods

### accessField()

```java
 T accessField(Object object, String name)
```

Finds a field in the registry associated with the object
* **Returns**: the value, or null if not found



**Returns:** `T`

### registerField()

```java
 void registerField(Object object, String name, Accessor accessor)
```

Adds a field to the registry
* **Parameter `object`**: object this field is associated with


**Parameter `name`**: name of field


**Parameter `accessor`**: accessor for the field value



