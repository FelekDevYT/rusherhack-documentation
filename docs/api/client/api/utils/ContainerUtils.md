# ContainerUtils

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/ContainerUtils.java`

Helper class containing functions to help you search items inside of containers
* **Author:** john@rusherhack.org 7/21/2025



## Overview

`ContainerUtils` is a class and implements [Globals](/client/api/Globals.md).

## Methods

### getContainerMenu()

```java
public static AbstractContainerMenu getContainerMenu()
```

**Returns**: the container menu from the current screen



**Returns:** `AbstractContainerMenu`

### getContainerMenuFromScreen()

```java
public static AbstractContainerMenu getContainerMenuFromScreen(Screen screen)
```

**Returns**: the container menu from the screen



**Returns:** `AbstractContainerMenu`

### findItem()

```java
public static int findItem(AbstractContainerMenu menu, Item item)
```

Finds an item in the container menu
* **Parameter `menu`**: the container menu


**Parameter `item`**: the item type to look for


**Returns**: the slot id of the found stack, or -1 if not found



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItem()

```java
public static int findItem(AbstractContainerMenu menu, Predicate<ItemStack> predicate)
```

Finds an item in the container menu
* **Parameter `menu`**: the container menu


**Parameter `predicate`**: **Returns**: the slot id of the found stack, or -1 if not found





**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItem()

```java
public static int findItem(AbstractContainerMenu menu, Predicate<ItemStack> predicate, Comparator<ItemStack> comparator)
```

Finds an item in the container menu
* **Parameter `menu`**: the container menu


**Parameter `predicate`**: @param comparator a comparator for which each valid stack will be compared against the previous valid stack


**Returns**: the slot id of the found stack, or -1 if not found



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### loopContainer()

```java
public static void loopContainer(AbstractContainerMenu menu, BiFunction<Integer, ItemStack, Boolean> function)
```

**Parameter `function`**: the function to apply to each slot. function accepts the slot number and item stack, and should return true to stop the loop



### getMenuSize()

```java
public static int getMenuSize(AbstractContainerMenu menu)
```

**Returns**: the number of slots in the menu



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### isContainerEmpty()

```java
public static boolean isContainerEmpty(AbstractContainerMenu menu)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isContainerFull()

```java
public static boolean isContainerFull(AbstractContainerMenu menu)
```

**Returns**: whether the container is full of items



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

