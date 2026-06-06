# InventoryUtils

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/InventoryUtils.java`

Helper class containing inventory related functions
* **Author:** John200410 7/8/2023



## Overview

`InventoryUtils` is a class and implements [Globals](/client/api/Globals.md).

## Methods

### clickSlot()

```java
public static void clickSlot(int slotId, boolean shiftClick)
```

Clicks a slot in the player's inventory
* **Parameter `slotId`**: the slot id in standard inventory slot numbers


@see [...](https://minecraft.wiki/w/Java_Edition_protocol/Inventory)

### swapSlots()

```java
public static void swapSlots(int inventorySlot, int hotbarSlot)
```

Swaps 2 item slots in the player's inventory
* **Parameter `inventorySlot`**: the slot id in standard inventory slot numbers


**Parameter `hotbarSlot`**: the slot id in hotbar slot numbers (hotbar: 0 - 8, offhand: 40, armor: 36 - 39)


@see [...](https://minecraft.wiki/w/Java_Edition_protocol/Inventory)

### findItem()

```java
public static int findItem(Item item, boolean hotbarPriority, boolean includeOffhand)
```

Finds an item in the player's inventory
* **Parameter `item`**: the item to find


**Parameter `hotbarPriority`**: @param includeOffhand whether to include the offhand slot


**Returns**: the inventory slot id of the item, or -1 if not found.


@see [...](https://minecraft.wiki/w/Java_Edition_protocol/Inventory)

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItem()

```java
public static int findItem(Predicate<ItemStack> predicate, boolean hotbarPriority, boolean includeOffhand)
```

Finds an item in the player's inventory
* **Parameter `predicate`**: @param hotbarPriority


**Parameter `includeOffhand`**: whether to include the offhand slot


**Returns**: the inventory slot id of the item, or -1 if not found.


@see [...](https://minecraft.wiki/w/Java_Edition_protocol/Inventory)

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItem()

```java
public static int findItem(Predicate<ItemStack> predicate, Comparator<ItemStack> comparator, boolean hotbarPriority, boolean includeOffhand)
```

Finds an item in the player's inventory
* **Parameter `predicate`**: @param comparator     a comparator for which each valid stack will be compared against the previous valid stack


**Parameter `hotbarPriority`**: @param includeOffhand whether to include the offhand slot


**Returns**: the inventory slot id of the item, or -1 if not found.


@see [...](https://minecraft.wiki/w/Java_Edition_protocol/Inventory)

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItemHotbar()

```java
public static int findItemHotbar(Item item)
```

Finds an item in the player's hotbar
* **Parameter `item`**: the item to find


**Returns**: the hotbar slot id of the item, or -1 if not found.



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItemHotbar()

```java
public static int findItemHotbar(Predicate<ItemStack> predicate)
```

Finds an item in the player's hotbar
* **Parameter `predicate`**: **Returns**: the hotbar slot id of the item, or -1 if not found.





**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### findItemHotbar()

```java
public static int findItemHotbar(Predicate<ItemStack> predicate, Comparator<ItemStack> comparator)
```

Finds an item in the player's hotbar
* **Parameter `predicate`**: @param comparator a comparator for which each valid stack will be compared against the previous valid stack


**Returns**: the hotbar slot id of the item, or -1 if not found.



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getItemCount()

```java
public static int getItemCount(Item item, boolean hotbarOnly, boolean includeOffhand)
```

Gets the count of an item in the player's inventory
* **Parameter `item`**: the item to count


**Parameter `hotbarOnly`**: whether to only search the hotbar


**Parameter `includeOffhand`**: whether to include the offhand slot


**Returns**: the number of the item that the player has



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getItemCount()

```java
public static int getItemCount(Predicate<ItemStack> predicate, boolean hotbarOnly, boolean includeOffhand)
```

Gets the count of an item in the player's inventory
* **Parameter `predicate`**: @param hotbarOnly     whether to only search the hotbar


**Parameter `includeOffhand`**: whether to include the offhand slot


**Returns**: the number of the item that the player has



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getStackCount()

```java
public static int getStackCount(Predicate<ItemStack> predicate, boolean hotbarOnly, boolean includeOffhand)
```

Gets the count of item stacks matching the specified predicate
* **Parameter `predicate`**: @param hotbarOnly     whether to only search the hotbar


**Parameter `includeOffhand`**: whether to include the offhand slot


**Returns**: the number of stacks of the item that the player has



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### loopInventory()

```java
public static void loopInventory(BiFunction<Integer, ItemStack, Boolean> function, boolean includeInventory, boolean includeOffhand, boolean includeHotbar, boolean hotbarPriority)
```

**Parameter `function`**: the function to apply to each slot. function accepts the slot number and item stack, and should return true to stop the loop


**Parameter `includeInventory`**: whether to include the player's inventory


**Parameter `includeOffhand`**: whether to include the offhand slot


**Parameter `includeHotbar`**: whether to include the player's hotbar


**Parameter `hotbarPriority`**: whether to loop the hotbar first



### getSelectedHotbarSlot()

```java
public static int getSelectedHotbarSlot()
```

**Returns**: selected inventory slot



**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setHotbarSlot()

```java
public static void setHotbarSlot(int slot)
```

Sets the selected hotbar slot
* **Parameter `slot`**: hotbar slot



### isInventoryEmpty()

```java
public static boolean isInventoryEmpty()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isInventoryFull()

```java
public static boolean isInventoryFull()
```

**Returns**: whether the inventory is full of items



**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getInventorySlot()

```java
public static int getInventorySlot(EquipmentSlot equipmentSlot)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getEquipmentSlot()

```java
public static EquipmentSlot getEquipmentSlot(int slot)
```

**Returns:** `EquipmentSlot`

### invToHotbarSlot()

```java
public static int invToHotbarSlot(int slot)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### hotbarToInvSlot()

```java
public static int hotbarToInvSlot(int slot)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

