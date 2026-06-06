# ItemUtils

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/ItemUtils.java`

Helper class for items and item stacks
* **Author:** john@rusherhack.org 5/25/2025



## Overview

`ItemUtils` is a class.

## Methods

### getDurability()

```java
public static float getDurability(ItemStack stack)
```

Gets durability of an item
* **Parameter `stack`**: item stack


**Returns**: float representing percentage of durability of the itemstack (0f to 1f)



**Returns:** [float](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Float.html)

### isArmor()

```java
public static boolean isArmor(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isElytra()

```java
public static boolean isElytra(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isGlideable()

```java
public static boolean isGlideable(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isItemEquipableInSlot()

```java
public static boolean isItemEquipableInSlot(ItemStack stack, EquipmentSlot slot)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isMeleeWeapon()

```java
public static boolean isMeleeWeapon(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isMeleeWeapon()

```java
public static boolean isMeleeWeapon(ItemStack stack, boolean includeSwords, boolean includeAxe, boolean includeTrident, boolean includeMace)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isRangedWeapon()

```java
public static boolean isRangedWeapon(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isRangedWeapon()

```java
public static boolean isRangedWeapon(ItemStack stack, boolean includeBow, boolean includeCrossbow, boolean includeTrident)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isSword()

```java
public static boolean isSword(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isAxe()

```java
public static boolean isAxe(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isTrident()

```java
public static boolean isTrident(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isMace()

```java
public static boolean isMace(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isTool()

```java
public static boolean isTool(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isCorrectToolForDrops()

```java
public static boolean isCorrectToolForDrops(ItemStack stack, BlockState blockstate)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### isPickaxe()

```java
public static boolean isPickaxe(ItemStack stack)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getAttributeModifiers()

```java
public static Multimap<Holder<Attribute>, AttributeModifier> getAttributeModifiers(ItemStack stack, EquipmentSlot slot)
```

**Returns:** `Multimap`&lt;`Holder`&lt;`Attribute`&gt;, `AttributeModifier`&gt;

### getAttributeModifiers()

```java
public static Collection<AttributeModifier> getAttributeModifiers(ItemStack stack, Holder<Attribute> attribute, EquipmentSlot slot)
```

**Returns:** [Collection](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html)&lt;`AttributeModifier`&gt;

### getContainerItemsFromStack()

```java
public static List<ItemStack> getContainerItemsFromStack(ItemStack stack)
```

Returns a collection of items that are inside of a container item (like shulker boxes)
* **Parameter `stack`**: the container item


**Returns**: items inside the container



**Returns:** [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html)&lt;`ItemStack`&gt;

