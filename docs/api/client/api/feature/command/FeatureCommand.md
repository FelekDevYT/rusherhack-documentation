# FeatureCommand

**Package:** `org.rusherhack.client.api.feature.command`

**Source:** `org/rusherhack/client/api/feature/command/FeatureCommand.java`

A command that lets you configure a feature's settings.
* **Author:** John200410 8/11/2023



## Overview

`FeatureCommand` is a class that extends [Command](/client/api/feature/command/Command.md).

## Constructor

```java
public FeatureCommand(IFeatureConfigurable feature)
```

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| feature | [IFeatureConfigurable](/core/feature/IFeatureConfigurable.md) | private final |


## Methods

### isHidden()

```java
public boolean isHidden()
```

**Returns:** [boolean](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Boolean.html)

### getFeature()

```java
public IFeatureConfigurable getFeature()
```

**Returns:** [IFeatureConfigurable](/core/feature/IFeatureConfigurable.md)

