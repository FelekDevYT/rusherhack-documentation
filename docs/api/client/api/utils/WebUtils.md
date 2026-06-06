# WebUtils

**Package:** `org.rusherhack.client.api.utils`

**Source:** `org/rusherhack/client/api/utils/WebUtils.java`

**Author:** john@rusherhack.org 6/28/2020 for rusherhack-rewrite



## Overview

`WebUtils` is a class.

## Fields

| Name | Type | Modifiers |
|------|------|----------|
| URL_PATTERN | `Pattern` | public static final |
| GSON | `Gson` | public static final |
| USER_AGENT | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |
| LEGIT_USER_AGENT | [String](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html) | public static final |
| HTTP_CLIENT | `HttpClient` | public static final |


## Methods

### sendCheckedGetRequest()

```java
public static HttpResponse<T> sendCheckedGetRequest(URI uri, HttpResponse.BodyHandler<T> handler)
```

**Returns:** `HttpResponse`&lt;`T`&gt;

### sendGetRequest()

```java
public static HttpResponse<T> sendGetRequest(URI uri, HttpResponse.BodyHandler<T> handler)
```

**Returns:** `HttpResponse`&lt;`T`&gt;

### sendPostRequest()

```java
public static HttpResponse<T> sendPostRequest(URI uri, HttpRequest.BodyPublisher publisher, HttpResponse.BodyHandler<T> handler)
```

**Returns:** `HttpResponse`&lt;`T`&gt;

### sendRequest()

```java
public static HttpResponse<T> sendRequest(HttpRequest request, HttpResponse.BodyHandler<T> handler)
```

**Returns:** `HttpResponse`&lt;`T`&gt;

### newRequestBuilder()

```java
public static HttpRequest.Builder newRequestBuilder(URI uri)
```

**Returns:** `HttpRequest.Builder`

### newJsonPostRequest()

```java
public static HttpRequest.Builder newJsonPostRequest(URI uri, JsonElement json)
```

**Returns:** `HttpRequest.Builder`

### newJsonPostRequest()

```java
public static HttpRequest.Builder newJsonPostRequest(URI uri, String json)
```

**Returns:** `HttpRequest.Builder`

### newFormPostRequest()

```java
public static HttpRequest.Builder newFormPostRequest(URI uri, FormBuilder form)
```

**Returns:** `HttpRequest.Builder`

### ofJson()

```java
public static HttpResponse.BodyHandler<JsonElement> ofJson()
```

**Returns:** `HttpResponse.BodyHandler`&lt;`JsonElement`&gt;

### ofJson()

```java
public static HttpResponse.BodyHandler<T> ofJson(Class<T> clazz)
```

**Returns:** `HttpResponse.BodyHandler`&lt;`T`&gt;

