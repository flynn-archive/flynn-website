---
title: Docs - Flynn
layout: docs
---

## App Formation
FIXME

### Attributes
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>app</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of app</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>created_at</strong></td>
    <td><em>date-time</em></td>
    <td>when formation was created</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
  <tr>
    <td><strong>processes</strong></td>
    <td><em>object</em></td>
    <td>Process ID map</td>
    <td><code>{"web":4102}</code></td>
  </tr>
  <tr>
    <td><strong>release</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of release</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>updated_at</strong></td>
    <td><em>date-time</em></td>
    <td>when formation was updated</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
</table>

### App Formation Get
FIXME

```
GET /apps/{app_id}/formations/{release_id}
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/formations/$RELEASE_ID
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "processes": [
    {
      "web": 4102
    }
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Formation Update
FIXME

```
PUT /apps/{app_id}/formations/{release_id}
```


#### Curl Example
```bash
$ curl -n -X PUT https://flynn.dev/apps/$APP_ID/formations/$RELEASE_ID
-H "Content-Type: application/json" \
-d '{"app":"01234567-89ab-cdef-0123-456789abcdef","release":"01234567-89ab-cdef-0123-456789abcdef","processes":[{"web":4102}],"created_at":"2012-01-01T12:00:00Z","updated_at":"2012-01-01T12:00:00Z"}'
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "processes": [
    {
      "web": 4102
    }
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Formation Delete
FIXME

```
DELETE /apps/{app_id}/formations/{release_id}
```


#### Curl Example
```bash
$ curl -n -X DELETE https://flynn.dev/apps/$APP_ID/formations/$RELEASE_ID
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "processes": [
    {
      "web": 4102
    }
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Formation List
FIXME

```
GET /apps/{app_id}/formations
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/formations
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
[
  {
    "app": "01234567-89ab-cdef-0123-456789abcdef",
    "release": "01234567-89ab-cdef-0123-456789abcdef",
    "processes": [
      {
        "web": 4102
      }
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## App Job
FIXME

### Attributes
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>app</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of app</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>cmd</strong></td>
    <td><em>array</em></td>
    <td>Shell Command</td>
    <td><code>"bash"</code> or <code>"my_script"</code></td>
  </tr>
  <tr>
    <td><strong>created_at</strong></td>
    <td><em>date-time</em></td>
    <td>when formation was created</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
  <tr>
    <td><strong>id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of job</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>release</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of release</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>state</strong></td>
    <td><em>string</em></td>
    <td>job state</td>
    <td><code>"started"</code></td>
  </tr>
  <tr>
    <td><strong>type</strong></td>
    <td><em>string</em></td>
    <td>job type</td>
    <td><code>"web"</code></td>
  </tr>
  <tr>
    <td><strong>updated_at</strong></td>
    <td><em>date-time</em></td>
    <td>when formation was updated</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
</table>

### App Job Create
FIXME

```
POST /apps/{app_id}/jobs
```


#### Curl Example
```bash
$ curl -n -X POST https://flynn.dev/apps/$APP_ID/jobs
-H "Content-Type: application/json" \
-d '{"release":"01234567-89ab-cdef-0123-456789abcdef","cmd":["bash","my_script"],"env":[{"TOAST":"hot_bread"}],"tty":true,"tty_columns":80,"tty_lines":24}'
```


#### Response Example
```
HTTP/1.1 201 Created
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "state": "started",
  "cmd": [
    "bash",
    "my_script"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Job Jobs List
FIXME

```
GET /apps/{app_id}/jobs
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/jobs
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "app": "01234567-89ab-cdef-0123-456789abcdef",
    "release": "01234567-89ab-cdef-0123-456789abcdef",
    "type": "web",
    "state": "started",
    "cmd": [
      "bash",
      "my_script"
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### App Job Update
FIXME

```
PUT /apps/{app_id}/jobs/{job_id}
```


#### Curl Example
```bash
$ curl -n -X PUT https://flynn.dev/apps/$APP_ID/jobs/$JOB_ID
-H "Content-Type: application/json" \
-d '{"id":"01234567-89ab-cdef-0123-456789abcdef","app":"01234567-89ab-cdef-0123-456789abcdef","release":"01234567-89ab-cdef-0123-456789abcdef","type":"web","state":"started","cmd":["bash","my_script"],"created_at":"2012-01-01T12:00:00Z","updated_at":"2012-01-01T12:00:00Z"}'
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "state": "started",
  "cmd": [
    "bash",
    "my_script"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Job Delete
FIXME

```
DELETE /apps/{app_id}/jobs/{job_id}
```


#### Curl Example
```bash
$ curl -n -X DELETE https://flynn.dev/apps/$APP_ID/jobs/$JOB_ID
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "state": "started",
  "cmd": [
    "bash",
    "my_script"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Job Logs
FIXME

```
GET /apps/{app_id}/jobs/{job_id}/log
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/jobs/$JOB_ID/log
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "release": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "state": "started",
  "cmd": [
    "bash",
    "my_script"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## App Release
FIXME

### Attributes
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>artifact</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of artifact</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>created_at</strong></td>
    <td><em>date-time</em></td>
    <td>when app was created</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
  <tr>
    <td><strong>env</strong></td>
    <td><em>object</em></td>
    <td>ENV variables for this release</td>
    <td><code>{"TOAST":"hot_bread"}</code></td>
  </tr>
  <tr>
    <td><strong>id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of release</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>processes</strong></td>
    <td><em>object</em></td>
    <td>FIXME</td>
    <td><code>["web",{"$ref":"#/definitions/process_type"}]</code></td>
  </tr>
</table>

### App Release List
FIXME

```
GET /apps/{app_id}/release
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/release
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "created_at": "2012-01-01T12:00:00Z",
    "artifact": "01234567-89ab-cdef-0123-456789abcdef",
    "env": [
      {
        "TOAST": "hot_bread"
      }
    ],
    "processes": {
      "web": {
        "$ref": "#/definitions/process_type"
      }
    }
  }
]
```

### App Release Update
FIXME

```
PUT /apps/{app_id}/release
```

#### Optional Parameters
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>release</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of release</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
</table>


#### Curl Example
```bash
$ curl -n -X PUT https://flynn.dev/apps/$APP_ID/release
-H "Content-Type: application/json" \
-d '{"release":"01234567-89ab-cdef-0123-456789abcdef"}'
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "artifact": "01234567-89ab-cdef-0123-456789abcdef",
  "env": [
    {
      "TOAST": "hot_bread"
    }
  ],
  "processes": {
    "web": {
      "$ref": "#/definitions/process_type"
    }
  }
}
```


## App Resource
FIXME

### Attributes
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>apps</strong></td>
    <td><em>array</em></td>
    <td>app ids</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>created_at</strong></td>
    <td><em>date-time</em></td>
    <td>when resource was created</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
  <tr>
    <td><strong>env</strong></td>
    <td><em>object</em></td>
    <td>ENV variables for this release</td>
    <td><code>{"TOAST":"hot_bread"}</code></td>
  </tr>
  <tr>
    <td><strong>external_id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of resource</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of artifact</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>provider_id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of provider</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
</table>

### App Resource List
FIXME

```
GET /apps/{app_id}/resources
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/resources
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "provider_id": "01234567-89ab-cdef-0123-456789abcdef",
    "external_id": "01234567-89ab-cdef-0123-456789abcdef",
    "created_at": "2012-01-01T12:00:00Z",
    "apps": [
      "01234567-89ab-cdef-0123-456789abcdef"
    ],
    "env": [
      {
        "TOAST": "hot_bread"
      }
    ]
  }
]
```


## App Route
FIXME

### Attributes
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>config</strong></td>
    <td><em>string</em></td>
    <td>raw json message</td>
    <td><code>"{ \"stuff\": \"more stuff\" }"</code></td>
  </tr>
  <tr>
    <td><strong>created_at</strong></td>
    <td><em>date-time</em></td>
    <td>when route was created</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
  <tr>
    <td><strong>id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of route</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>parent_ref</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier for parent</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>type</strong></td>
    <td><em>string</em></td>
    <td>the type of route</td>
    <td><code>"web"</code></td>
  </tr>
  <tr>
    <td><strong>updated_at</strong></td>
    <td><em>date-time</em></td>
    <td>when route was updated</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
</table>

### App Route Create
FIXME

```
POST /apps/{app_id}/routes
```


#### Curl Example
```bash
$ curl -n -X POST https://flynn.dev/apps/$APP_ID/routes
-H "Content-Type: application/json" \
-d '{"id":"01234567-89ab-cdef-0123-456789abcdef","parent_ref":"01234567-89ab-cdef-0123-456789abcdef","type":"web","config":"{ \"stuff\": \"more stuff\" }","created_at":"2012-01-01T12:00:00Z","updated_at":"2012-01-01T12:00:00Z"}'
```


#### Response Example
```
HTTP/1.1 201 Created
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "parent_ref": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "config": "{ \"stuff\": \"more stuff\" }",
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Route List
FIXME

```
GET /apps/{app_id}/routes
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/routes
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "parent_ref": "01234567-89ab-cdef-0123-456789abcdef",
    "type": "web",
    "config": "{ \"stuff\": \"more stuff\" }",
    "created_at": "2012-01-01T12:00:00Z",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### App Route Get
FIXME

```
GET /apps/{app_id}/routes/{route_type}/{route_id}
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/apps/$APP_ID/routes/$ROUTE_TYPE/$ROUTE_ID
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "parent_ref": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "config": "{ \"stuff\": \"more stuff\" }",
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Route Delete
FIXME

```
DELETE /apps/{app_id}/routes/{route_type}/{route_id}
```


#### Curl Example
```bash
$ curl -n -X DELETE https://flynn.dev/apps/$APP_ID/routes/$ROUTE_TYPE/$ROUTE_ID
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "parent_ref": "01234567-89ab-cdef-0123-456789abcdef",
  "type": "web",
  "config": "{ \"stuff\": \"more stuff\" }",
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## Provider Resource
FIXME

### Attributes
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><strong>apps</strong></td>
    <td><em>array</em></td>
    <td>app ids</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>created_at</strong></td>
    <td><em>date-time</em></td>
    <td>when resource was created</td>
    <td><code>"2012-01-01T12:00:00Z"</code></td>
  </tr>
  <tr>
    <td><strong>env</strong></td>
    <td><em>object</em></td>
    <td>ENV variables for this release</td>
    <td><code>{"TOAST":"hot_bread"}</code></td>
  </tr>
  <tr>
    <td><strong>external_id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of resource</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of artifact</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
  <tr>
    <td><strong>provider_id</strong></td>
    <td><em>uuid</em></td>
    <td>unique identifier of provider</td>
    <td><code>"01234567-89ab-cdef-0123-456789abcdef"</code></td>
  </tr>
</table>

### Provider Resource Create
FIXME

```
POST /providers/{provider_id}/resources
```


#### Curl Example
```bash
$ curl -n -X POST https://flynn.dev/providers/$PROVIDER_ID/resources
-H "Content-Type: application/json" \
-d '{"apps":["01234567-89ab-cdef-0123-456789abcdef"],"config":"{ \"stuff\": \"more stuff\" }"}'
```


#### Response Example
```
HTTP/1.1 201 Created
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "provider_id": "01234567-89ab-cdef-0123-456789abcdef",
  "external_id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "apps": [
    "01234567-89ab-cdef-0123-456789abcdef"
  ],
  "env": [
    {
      "TOAST": "hot_bread"
    }
  ]
}
```

### Provider Resource Info
FIXME

```
GET /providers/{provider_id}/resources/{resource_id}
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/providers/$PROVIDER_ID/resources/$RESOURCE_ID
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "provider_id": "01234567-89ab-cdef-0123-456789abcdef",
  "external_id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "apps": [
    "01234567-89ab-cdef-0123-456789abcdef"
  ],
  "env": [
    {
      "TOAST": "hot_bread"
    }
  ]
}
```

### Provider Resource List
FIXME

```
GET /providers/{provider_id}/resources
```


#### Curl Example
```bash
$ curl -n -X GET https://flynn.dev/providers/$PROVIDER_ID/resources
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "provider_id": "01234567-89ab-cdef-0123-456789abcdef",
    "external_id": "01234567-89ab-cdef-0123-456789abcdef",
    "created_at": "2012-01-01T12:00:00Z",
    "apps": [
      "01234567-89ab-cdef-0123-456789abcdef"
    ],
    "env": [
      {
        "TOAST": "hot_bread"
      }
    ]
  }
]
```

### Provider Resource Update
FIXME

```
PUT /providers/{provider_id}/resources
```


#### Curl Example
```bash
$ curl -n -X PUT https://flynn.dev/providers/$PROVIDER_ID/resources
-H "Content-Type: application/json" \
-d '{"id":"01234567-89ab-cdef-0123-456789abcdef","provider_id":"01234567-89ab-cdef-0123-456789abcdef","external_id":"01234567-89ab-cdef-0123-456789abcdef","created_at":"2012-01-01T12:00:00Z","apps":["01234567-89ab-cdef-0123-456789abcdef"],"env":[{"TOAST":"hot_bread"}]}'
```


#### Response Example
```
HTTP/1.1 200 OK
```
```
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "provider_id": "01234567-89ab-cdef-0123-456789abcdef",
  "external_id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "apps": [
    "01234567-89ab-cdef-0123-456789abcdef"
  ],
  "env": [
    {
      "TOAST": "hot_bread"
    }
  ]
}
```

















