# TextField

**Package:** `org.rusherhack.client.api.utils.objects`

**Source:** `org/rusherhack/api/javadoc/client/api/utils/objects/TextField.java`

**Author:** John200410 9/26/2023



## Overview

`TextField` is a class and implements [ITypeable](/api/javadoc/core/interfaces/ITypeable.md).

## Constructor

```java
public TextField()
```

```java
public TextField(Consumer<String> consumer)
```

```java
public TextField(Consumer<String> consumer, int maxLength)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| value | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | private |
| shiftPressed | [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html) | private |
| maxLength | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private final |
| cursorPos | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private |
| highlightPos | [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html) | private |
| characterFilter | [Predicate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Predicate.html)&lt;[Character](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Character.html)&gt; | private |
| consumer | [Consumer](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Consumer.html)&lt;[String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)&gt; | private |


## Methods

### getDisplayText()

```java
public String getDisplayText()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### setConsumer()

```java
public void setConsumer(Consumer<String> consumer)
```

### setCharacterFilter()

```java
public void setCharacterFilter(Predicate<Character> characterFilter)
```

### reset()

```java
public void reset()
```

### isAllowedCharacter()

```java
private boolean isAllowedCharacter(char character)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### filterText()

```java
private String filterText(String text)
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### charTyped()

```java
public boolean charTyped(char character)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### keyTyped()

```java
public boolean keyTyped(int keyCode, int scanCode, int modifiers)
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### insertText()

```java
public void insertText(String text)
```

### deleteText()

```java
private void deleteText(KeyEvent event, int count)
```

### deleteWords()

```java
public void deleteWords(int num)
```

### deleteChars()

```java
public void deleteChars(int num)
```

### getHighlighted()

```java
public String getHighlighted()
```

**Returns:** [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html)

### getHighlightStartPos()

```java
public int getHighlightStartPos()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getHighlightEndPos()

```java
public int getHighlightEndPos()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### setHighlightPos()

```java
public void setHighlightPos(int position)
```

### moveCursor()

```java
public void moveCursor(int delta)
```

### getCursorPos()

```java
private int getCursorPos(int delta)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### moveCursorTo()

```java
public void moveCursorTo(int pos)
```

### setCursorPosition()

```java
public void setCursorPosition(int pos)
```

### moveCursorToStart()

```java
public void moveCursorToStart()
```

### moveCursorToEnd()

```java
public void moveCursorToEnd()
```

### onValueChange()

```java
private void onValueChange(String newText)
```

### getCursorPosition()

```java
public int getCursorPosition()
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getWordPosition()

```java
public int getWordPosition(int numWords)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getWordPosition()

```java
private int getWordPosition(int n, int pos)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

### getWordPosition()

```java
private int getWordPosition(int n, int pos, boolean skipWs)
```

**Returns:** [int](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Integer.html)

