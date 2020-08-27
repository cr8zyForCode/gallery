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
        "_id": "Unique property id Number",
        "description": "String",
        "starRating": "Number",
        "reviewTotal": "Number",
        "superhost": "Boolean",
        "location": "String city, state, country",
        "images": {
            "bedrooms": [
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                },
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                }
            ],
            "bathrooms": [
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                },
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                },
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                }
            ],
            "_id": "String alphanumeric",
            "house": {
                "_id": "String alphanumeric",
                "imageURL": "String URL",
                "description": "String"
            },
            "backyard": {
                "_id": "String alphanumeric",
                "imageURL": "String URL",
                "description": "String"
            },
            "kitchen": {
                "_id": "String alphanumeric",
                "imageURL": "String URL",
                "description": "String"
            }
        },
        "__v": "Number"
    }
]
```

### Add property image
  * POST `/newimages`

**Success Status Code:** `201`

**Request Body**:
Expects JSON with the following primary keys: "_id" and "images".
"_id" value is the property id to which you want to post an image to.
The key "images" has a value of an object with keys: "bedrooms", "bathrooms",
"hause", "backyard" and "kitchen". They "bedrooms" and "bathrooms" keys have
a value of array of at least one image-object. The "houe", "backyard" and
"kitchen" keys have a single image-object each. An image-object is an object
data type with the keys "imageURL" (a string of an image link) and "description"
(a string with a small description on the image in "imageURL").


```json
    [
    {
        "_id": "Unique property id Number",
        "images": {
            "bedrooms": [
                {
                    "imageURL": "String URL",
                    "description": "String"
                }
            ],
            "bathrooms": [
                {
                    "imageURL": "String URL",
                    "description": "String"
                }
            ],
            "house": {
                "imageURL": "String URL",
                "description": "String"
            },
            "backyard": {
                "imageURL": "String URL",
                "description": "String"
            },
            "kitchen": {
                "imageURL": "String URL",
                "description": "String"
            }
        }
    }
]
```


### Update porperty image
  * PATCH `/updateimages`

**Success Status Code:** `204`

**Request Body**:
Expects JSON with any of the following keys (include only keys to be updated).
For the "bedrooms" and "bathrooms" key values (arrays) include they key "_id"
in the image-object to replace an image-object (No need to add key "_id"
to add a new image). The key values "house", "backyard" and "kitchen" in "images"
primary key will be replaces since they only take one image-object as their value.

```json
    [
    {
        "_id": "Unique property id Number",
        "images": {
            "bedrooms": [
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                }
            ],
            "bathrooms": [
                {
                    "_id": "String alphanumeric",
                    "imageURL": "String URL",
                    "description": "String"
                }
            ],
            "house": {
                "imageURL": "String URL",
                "description": "String"
            },
            "backyard": {
                "imageURL": "String URL",
                "description": "String"
            },
            "kitchen": {
                "imageURL": "String URL",
                "description": "String"
            }
        }
    }
]
```

### Delete property image
  * DELETE `/deleteimages`

**Success Status Code:** `204`

**Request Body**:
Expects JSON with the following keys. Only include the key values that
you want to delete. "bedrooms" and "bathrooms" keys value is an array
of indexed objects. Each obejct needs the key "_id" to specify the
the image you want to delete.

```json
    [
    {
        "_id": "Unique property id Number",
        "images": {
            "bedrooms": [
                {
                    "_id": "String alphanumeric"
                },
                {
                    "_id": "String alphanumeric"
                }
            ],
            "bathrooms": [
                {
                    "_id": "String alphanumeric"
                },
                {
                    "_id": "String alphanumeric"
                },
                {
                    "_id": "String alphanumeric"
                }
            ],
            "house": {
                "_id": "String alphanumeric"
            },
            "backyard": {
                "_id": "String alphanumeric"
            },
            "kitchen": {
                "_id": "String alphanumeric"
            }
        }
    }
]
```

Installation
1) Install and run MongoDB Community Edition
<!-- https://docs.mongodb.com/manual/administration/install-community/ -->
2) Run "npm install" in command line