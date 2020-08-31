## Server API

### Get property info
  * GET `/properties/:id`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `200`

**Returns:** JSON

```json

{
    "property_id": "Unique property id Number",
    "small_description": "String",
    "star_rating": "Number",
    "review_total": "Number",
    "superhost": "Boolean",
    "city": "String",
    "state_province": "String",
    "country": "String",
    "images": [
        {
            "image_id": "Number",
            "property_id": "Number",
            "url": "String",
            "small_description": "String",
            "grouping": "Number",
        }
    ]
}

```

### Add a property profile
  * POST `/property`

**Success Status Code:** `201`

**Request Body**:
Expects a JSON object with the following format. The key "images" value is an array of one or more objects that hold the keys and values to an image assositaed with the
property.


```json

{
    "property_id": "Unique property id Number",
    "small_description": "String",
    "star_rating": "Number",
    "review_total": "Number",
    "superhost": "Boolean",
    "city": "String",
    "state_province": "String",
    "country": "String"
}

```

### Add property images
  * POST `/images`

**Success Status Code:** `201`

**Request Body**:
Expects a JSON object with the following primary keys: "images". The value of the "images" key is an array of objects. Each object has the keys: "image_id" (unique image id), "property_id" (the id of the property associated with the image), "url" (a stringified url for the image),
"small_description" and "grouping" (a number, 1 for the main image to show in the gallery, 2, 3... for the others).


```json

{
    "images": [
        {
            "image_id": "Number",
            "property_id": "Number",
            "url": "String",
            "small_description": "String",
            "grouping": "Number",
        }
    ]
}

```

### Add oen property image
  * POST `/image`

**Success Status Code:** `201`

**Request Body**:
Expects a JSON object with the following primary keys: "image_id" (unique image id), "property_id" (the id of the property associated with the image), "url" (a stringified url for the image),"small_description" and "grouping" (a number, 1 for the main image to show in the gallery, 2, 3... for the others).


```json

{
    "image_id": "Number",
    "property_id": "Number",
    "url": "String",
    "small_description": "String",
    "grouping": "Number",
}

```


### Update a porperty profile
  * PATCH `/property`

**Success Status Code:** `204`

**Request Body**:
Expects a JSON object with any of the following keys (include only keys to be updated).

```json

{
    "property_id": "Unique property id Number",
    "small_description": "String",
    "star_rating": "Number",
    "review_total": "Number",
    "superhost": "Boolean",
    "city": "String",
    "state_province": "String",
    "country": "String"
}

```

### Update porperty images
  * PATCH `/images`

**Success Status Code:** `204`

**Request Body**:
Expects a JSON object with the key of "images" and a value of an array of objects. In the objects include any of the following keys (include only keys to be updated).

```json

{
    "images": [
        {
            "image_id": "Number",
            "property_id": "Number",
            "url": "String",
            "small_description": "String",
            "grouping": "Number",
        }
    ]
}

```

### Update porperty image
  * PATCH `/image`

**Success Status Code:** `204`

**Request Body**:
Expects a JSON object with any of the following keys (include only keys to be updated).

```json

{
    "image_id": "Number",
    "property_id": "Number",
    "url": "String",
    "small_description": "String",
    "grouping": "Number",
}

```

### Delete a property profile
  * DELETE `/property`

**Success Status Code:** `204`

**Request Body**:
Expects a JSON object with the following key. Images associated with property id will be deleted.

```json

{
    "property_id": "Unique property id Number"
}

```

### Delete property images
  * DELETE `/images`

**Success Status Code:** `204`

**Request Body**:
Expects a JSON object with the "images" key. "images" key value is an array of obejcts. Each object needs an "image_id" key with the image id number you want to delete.

```json

{
    "images": [
        {
            "image_id": "Number",
        },
    ]
}

```

### Delete one property image
  * DELETE `/image`

**Success Status Code:** `204`

**Request Body**:
Expects a JSON object with the following key.

```json

{
    "image_id": "Unique property id Number"
}

```
