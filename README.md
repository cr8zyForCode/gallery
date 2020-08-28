## Server API

### Get property info
  * GET `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
[
    {
        "property_id": "Unique property id Number",
        "description": "String",
        "starRating": "Number",
        "reviewTotal": "Number",
        "superhost": "Boolean",
        "location": "String city, state, country",
        "images": [
            {
                "image_id": "Number",
                "property_id": "Number",
                "url": "string",
                "description": "string",
                "order": "number",
            }
        ]
    }
]
```

### Add property image
  * POST `/property`

**Success Status Code:** `201`

**Request Body**:
Expects JSON with the following format. The key "images" value is an array of one or more objects that hold the keys and values to an image assositaed with the
property.


```json
[
    {
        "description": "String",
        "starRating": "Number",
        "reviewTotal": "Number",
        "superhost": "Boolean",
        "location": "String city, state, country",
        "images": [
            {
                "url": "string",
                "description": "string",
                "order": "number",
            },
        ]
    }
]
```

### Add property image
  * POST `/images`

**Success Status Code:** `201`

**Request Body**:
Expects JSON with the following primary keys: "property_id" and "images".


```json
[
    {
        "images": [
            {
                "image_id": "Number",
                "property_id": "Number",
                "url": "string",
                "description": "string",
                "order": "number",
            },
        ]
    }
]
```


### Update porperty image
  * PATCH `/property/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`

**Request Body**:
Expects JSON with any of the following keys (include only keys to be updated).
To update the "description" of an image, you need to include the "image_id"

```json
[
    {
        "description": "String",
        "starRating": "Number",
        "reviewTotal": "Number",
        "superhost": "Boolean",
        "location": "String city, state, country",
        "images": [
            {
                "image_id": "Number",
                "url": "string",
                "description": "string",
                "order": "number",
            },
        ]
    }
]
```

### Delete property image
  * DELETE `/property/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `204`

**Request Body**:
Expects JSON with the following keys. Only include the key values that
you want to delete.

```json
[
    {
        "property_id": "Unique property id Number",
        "images": [
            {
                "image_id": "Number"
            },
        ]
    }
]
```
