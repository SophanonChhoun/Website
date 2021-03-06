define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/about_us/list",
    "title": "1. List about us",
    "version": "1.0.0",
    "name": "Show_about_us",
    "group": "About_us",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": [\n        {\n            \"id\": 1,\n            \"media_id\": 2,\n            \"slug\": \"banner\",\n            \"created_at\": \"2020-08-17 07:46:56\",\n            \"deleted_at\": null,\n            \"languages\": [\n                {\n                    \"title\": \"English\",\n                    \"code\": \"en\",\n                    \"translations\": {\n                        \"id\": 5,\n                        \"about_us_id\": 5,\n                        \"description\": \"description en update\",\n                        \"lang\": \"en\"\n                    }\n                },\n                {\n                    \"title\": \"ខ្មែរ\",\n                    \"code\": \"km\",\n                    \"translations\": {\n                        \"id\": 6,\n                        \"about_us_id\": 5,\n                        \"description\": \"description km update\",\n                        \"lang\": \"km\"\n                    }\n                },\n                {\n                    \"title\": \"中文\",\n                    \"code\": \"zh\",\n                    \"translations\": {\n                        \"id\": 7,\n                        \"about_us_id\": 5,\n                        \"description\": \"description zh update\",\n                        \"lang\": \"zh\"\n                    }\n                },\n                {\n                    \"title\": \"日本人\",\n                    \"code\": \"jp\",\n                    \"translations\": {\n                        \"id\": 8,\n                        \"about_us_id\": 5,\n                        \"description\": \"description jp update\",\n                        \"lang\": \"jp\"\n                    }\n                }\n            ],\n            \"media\": {\n                \"file_url\": \"http://127.0.0.1:8081/uploads/images/ec510b1b85b406c586eca3f63c40cdc8.png\",\n                \"file_name\": \"ec510b1b85b406c586eca3f63c40cdc8.png\",\n                \"file_type\": \"image\",\n                \"size\": \"original\"\n            }\n        },\n        {\n            \"id\": 5,\n            \"media_id\": null,\n            \"slug\": \"who_we_are\",\n            \"created_at\": \"2020-08-17 09:13:16\",\n            \"deleted_at\": null,\n            \"languages\": [\n                {\n                    \"title\": \"English\",\n                    \"code\": \"en\",\n                    \"translations\": {\n                        \"id\": 5,\n                        \"about_us_id\": 5,\n                        \"description\": \"description en update\",\n                        \"lang\": \"en\"\n                    }\n                },\n                {\n                    \"title\": \"ខ្មែរ\",\n                    \"code\": \"km\",\n                    \"translations\": {\n                        \"id\": 6,\n                        \"about_us_id\": 5,\n                        \"description\": \"description km update\",\n                        \"lang\": \"km\"\n                    }\n                },\n                {\n                    \"title\": \"中文\",\n                    \"code\": \"zh\",\n                    \"translations\": {\n                        \"id\": 7,\n                        \"about_us_id\": 5,\n                        \"description\": \"description zh update\",\n                        \"lang\": \"zh\"\n                    }\n                },\n                {\n                    \"title\": \"日本人\",\n                    \"code\": \"jp\",\n                    \"translations\": {\n                        \"id\": 8,\n                        \"about_us_id\": 5,\n                        \"description\": \"description jp update\",\n                        \"lang\": \"jp\"\n                    }\n                }\n            ],\n            \"media\": null\n        },\n        {\n            \"id\": 6,\n            \"media_id\": 3,\n            \"slug\": \"vision\",\n            \"created_at\": \"2020-08-17 09:16:50\",\n            \"deleted_at\": null,\n            \"languages\": [\n                {\n                    \"title\": \"English\",\n                    \"code\": \"en\",\n                    \"translations\": {\n                        \"id\": 5,\n                        \"about_us_id\": 5,\n                        \"description\": \"description en update\",\n                        \"lang\": \"en\"\n                    }\n                },\n                {\n                    \"title\": \"ខ្មែរ\",\n                    \"code\": \"km\",\n                    \"translations\": {\n                        \"id\": 6,\n                        \"about_us_id\": 5,\n                        \"description\": \"description km update\",\n                        \"lang\": \"km\"\n                    }\n                },\n                {\n                    \"title\": \"中文\",\n                    \"code\": \"zh\",\n                    \"translations\": {\n                        \"id\": 7,\n                        \"about_us_id\": 5,\n                        \"description\": \"description zh update\",\n                        \"lang\": \"zh\"\n                    }\n                },\n                {\n                    \"title\": \"日本人\",\n                    \"code\": \"jp\",\n                    \"translations\": {\n                        \"id\": 8,\n                        \"about_us_id\": 5,\n                        \"description\": \"description jp update\",\n                        \"lang\": \"jp\"\n                    }\n                }\n            ],\n            \"media\": {\n                \"file_url\": \"http://127.0.0.1:8081/uploads/images/259b8debc060d7184f6688af6a7744f3.png\",\n                \"file_name\": \"259b8debc060d7184f6688af6a7744f3.png\",\n                \"file_type\": \"image\",\n                \"size\": \"original\"\n            }\n        },\n        {\n            \"id\": 7,\n            \"media_id\": 5,\n            \"slug\": \"aspiration\",\n            \"created_at\": \"2020-08-17 09:18:21\",\n            \"deleted_at\": null,\n            \"languages\": [\n                {\n                    \"title\": \"English\",\n                    \"code\": \"en\",\n                    \"translations\": {\n                        \"id\": 5,\n                        \"about_us_id\": 5,\n                        \"description\": \"description en update\",\n                        \"lang\": \"en\"\n                    }\n                },\n                {\n                    \"title\": \"ខ្មែរ\",\n                    \"code\": \"km\",\n                    \"translations\": {\n                        \"id\": 6,\n                        \"about_us_id\": 5,\n                        \"description\": \"description km update\",\n                        \"lang\": \"km\"\n                    }\n                },\n                {\n                    \"title\": \"中文\",\n                    \"code\": \"zh\",\n                    \"translations\": {\n                        \"id\": 7,\n                        \"about_us_id\": 5,\n                        \"description\": \"description zh update\",\n                        \"lang\": \"zh\"\n                    }\n                },\n                {\n                    \"title\": \"日本人\",\n                    \"code\": \"jp\",\n                    \"translations\": {\n                        \"id\": 8,\n                        \"about_us_id\": 5,\n                        \"description\": \"description jp update\",\n                        \"lang\": \"jp\"\n                    }\n                }\n            ],\n            \"media\": {\n                \"file_url\": \"http://127.0.0.1:8081/uploads/images/e27a8543e460912e88004c9a5bae35cf.png\",\n                \"file_name\": \"e27a8543e460912e88004c9a5bae35cf.png\",\n                \"file_type\": \"image\",\n                \"size\": \"original\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./about_us.js",
    "groupTitle": "About_us",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/about_us/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/about_us/update/:slug",
    "title": "2. Update about us",
    "version": "1.0.0",
    "name": "Update_about_us",
    "group": "About_us",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "slug",
            "description": "<p>About us slug. Value are: <code>banner</code>, <code>who_we_are</code>, <code>vision</code>, <code>aspiration</code>, <code>core_value</code>, <code>philosophy</code></p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": true,
            "field": "translations",
            "description": "<p>Transaltions. This one required if slug is not <code>banner</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Address of branch or location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.lang",
            "description": "<p>Latitude of location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "image",
            "description": "<p>Banner Image base64</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"description\" : \"aspiration description en update\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"description\" : \" aspiration description km update\"\n\t},\n\t{\n\t\t\"lang\" : \"zh\",\n\t\t\"description\" : \"aspiration description zh\"\n\t},\n\t{\n\t\t\"lang\" : \"jp\",\n\t\t\"description\" : \"aspiration description jp\"\n\t}],\n\t\"image\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\"\n}",
        "type": "curl"
      }
    ],
    "filename": "./about_us.js",
    "groupTitle": "About_us",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/about_us/update/:slug"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/advertisement/store",
    "title": "3. Create Advertisement",
    "version": "1.0.0",
    "name": "Create_Advertisement",
    "group": "Advertisement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "price",
            "description": "<p>Price of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start date of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End date of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>Position of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "Base64",
            "optional": false,
            "field": "image",
            "description": "<p>Image of advertisement</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n    \"success\": true,\n    \"data\": \"The Advertisement was created.\"\n}",
        "type": "curl"
      }
    ],
    "filename": "./Advertisement.js",
    "groupTitle": "Advertisement",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/advertisement/store"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/advertisement/destroy/:advertisement_id",
    "title": "6. Delete Advertisement",
    "version": "1.0.0",
    "name": "Delete_Advertisement",
    "group": "Advertisement",
    "filename": "./Advertisement.js",
    "groupTitle": "Advertisement",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/advertisement/destroy/:advertisement_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/advertisement/list",
    "title": "1. List Advertisement",
    "version": "1.0.0",
    "name": "List_Advertisement",
    "group": "Advertisement",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 9,\n                \"position\": \"center\",\n                \"start_date\": \"2020-10-18\",\n                \"end_date\": \"2020-10-19\",\n                \"price\": \"200.10\",\n                \"is_enable\": false,\n                \"image\": \"http://127.0.0.1:8081/uploads/images/ccbf5c8fed53bd3ecd5e5018bed0cc6a.png\"\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Advertisement.js",
    "groupTitle": "Advertisement",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/advertisement/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/advertisement/show/:advertisement_id",
    "title": "2. Show Advertisement",
    "version": "1.0.0",
    "name": "Show_Advertisement",
    "group": "Advertisement",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"id\": 1,\n        \"position\": \"right\",\n        \"price\": \"200.10\",\n        \"start_date\": \"2020-10-18\",\n        \"end_date\": \"2020-10-19\",\n        \"is_enable\": false,\n        \"description\": \"Hello World\",\n        \"media_id\": 73,\n        \"created_at\": \"2020-10-16 10:51:05\",\n        \"media\": {\n            \"file_url\": \"http://127.0.0.1:8081/uploads/images/8c92842d58a0635b6c2643a9d4f4ba32.png\",\n            \"file_name\": \"8c92842d58a0635b6c2643a9d4f4ba32.png\",\n            \"file_type\": \"image\",\n            \"size\": \"original\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Advertisement.js",
    "groupTitle": "Advertisement",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/advertisement/show/:advertisement_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/advertisement/update/:advertisement_id",
    "title": "4. Update Advertisement",
    "version": "1.0.0",
    "name": "Update_Advertisement",
    "group": "Advertisement",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "price",
            "description": "<p>Price of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start date of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End date of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>Position of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of advertisement</p>"
          },
          {
            "group": "Parameter",
            "type": "Base64",
            "optional": false,
            "field": "image",
            "description": "<p>Image of advertisement</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n    \"success\": false,\n    \"message\": \"The Advertisement is not found.\"\n}",
        "type": "curl"
      }
    ],
    "filename": "./Advertisement.js",
    "groupTitle": "Advertisement",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/advertisement/update/:advertisement_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "1. Login",
    "version": "1.0.0",
    "name": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n   \"email\": \"chhounsophanon14@gmail.com\",\n   \"password\": \"password\"\n}",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.access_token",
            "description": "<p>auth token to authorize access private api for each user</p>"
          },
          {
            "group": "200",
            "type": "timestamp",
            "optional": false,
            "field": "data.expired_at",
            "description": "<p>auth token expiration time</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data.customer",
            "description": "<p>customer profile</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "data.customer.id",
            "description": "<p>customer id</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.first_name",
            "description": "<p>customer first name</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.last_name",
            "description": "<p>customer last name</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.email",
            "description": "<p>customer email</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.dob",
            "description": "<p>customer date of birth</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.gender",
            "description": "<p>customer gender. can be <code>m</code> or <code>f</code></p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.phone_number",
            "description": "<p>customer phone number</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.street_address",
            "description": "<p>customer street address</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.city",
            "description": "<p>customer city</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.customer.country",
            "description": "<p>customer country</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "data.customer.is_enable",
            "description": "<p>customer active/inactive status</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "data.customer.created_at",
            "description": "<p>created date</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "data.customer.updated_at",
            "description": "<p>updated date</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "data.redirect",
            "description": "<p>First module that user has access rights to read</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"access_token\": \"bfb23d7740c9cf1221007716d50e9c6d5cf221fa9aec8cd6d4a0e971ee05a42c\",\n       \"expired_at\": 1581947006,\n       \"user\": {\n           \"id\": 1,\n           \"first_name\": \"Codingate\",\n           \"last_name\": \"Technology\",\n           \"user_name\": \"Admin\",\n           \"email\": \"admin@codingate.com\",\n           \"gender\": \"male\",\n           \"phone_number\": \"092 77 00 99\",\n           \"address\": Phnom Penh,\n           \"is_enable\": true,\n           \"created_by\": 1,\n           \"updated_by\": 1,\n           \"created_at\": \"2020-02-11 16:42:47\",\n           \"updated_at\": \"2020-02-16 13:32:20\",\n           \"media\": {\n               \"file_url\": \"http://api.aia.local/uploads/images/f428389783b4bb389934c3abe52834a7.png\",\n               \"file_name\": \"f428389783b4bb389934c3abe52834a7.png\",\n               \"file_type\": \"image\",\n               \"size\": \"original\"\n           }\n       },\n       \"redirect\": \"admin\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/login"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "400",
            "optional": false,
            "field": "IncorrectUsernamePassword",
            "description": "<p>Username or Password is incorrect.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 (IncorrectUsernamePassword):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"success\": false,\n   \"message\": \"The username/password is incorrect.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/auth/logout",
    "title": "3. Log Out",
    "version": "1.0.0",
    "name": "Logout",
    "group": "Authentication",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.message",
            "description": "<p>message of success</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"message\": \"You have logged out successfully.\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/auth/logout"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/auth/forget",
    "title": "4. Request Forgot Password Code",
    "version": "1.0.0",
    "name": "Request_Forgot_Password_Code",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"email\" : \"admin@codingate.com\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>user email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.verify_code",
            "description": "<p>verify code to reset password</p>"
          },
          {
            "group": "200",
            "type": "datetime",
            "optional": false,
            "field": "data.expired_at",
            "description": "<p>expiration time</p>"
          },
          {
            "group": "200",
            "type": "integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>verify code id</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"email\": \"admin@codingate.com\",\n       \"verify_code\": \"dawI\",\n       \"expired_at\": \"2020-01-11T03:16:59.505240Z\",\n       \"id\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/auth/forget"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/auth/forget/reset",
    "title": "6. Reset Password",
    "version": "1.0.0",
    "name": "Reset_Password",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to reset password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm new password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"email\" : \"admin@codingate.com\",\n\t\"token\" : \"e9ab3b1529b012a61cc59c25865ff235b6dd1e8999467d57ab72bd0b7d5b8341\",\n\t\"password\" : \"password\",\n\t\"confirm_password\" : \"password\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.message",
            "description": "<p>response message</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"message\": \"You have reset password successfully.\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/auth/forget/reset"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "400",
            "optional": false,
            "field": "TokenExpired",
            "description": "<p>Token is expired</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 (TokenExpired):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"success\": false,\n   \"message\": \"The token is expired.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/auth/forget/verify",
    "title": "5. Verify Forgot Password Code",
    "version": "1.0.0",
    "name": "Verify_Forgot_Password_Code",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Verify code which sent through email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"email\" : \"admin@codingate.com\",\n\t\"code\" : \"dawI\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>reset password token</p>"
          },
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success status</p>"
          },
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>response data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"token\": \"6f4d5d3ce8ad8f80075a888f0968c28070df4ffd7d5e23fd1730f10330ca9165\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/auth/forget/verify"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "400",
            "optional": false,
            "field": "OtpIncorrect",
            "description": "<p>The Otp is incorrect.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 (OtpIncorrect):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"success\": false,\n   \"message\": \"The verify code confirmation does not match.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/command/create",
    "title": "3. Create command",
    "version": "1.0.0",
    "name": "Create_command",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Command name en\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Command name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Command name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Command name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/command/delete/:command_id",
    "title": "6. Delete command",
    "version": "1.0.0",
    "name": "Delete_command",
    "group": "Command",
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/delete/:command_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/command/list",
    "title": "1. List commands",
    "version": "1.0.0",
    "name": "List_commands",
    "group": "Command",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 2,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 09:19:49\",\n                \"translation\": {\n                    \"command_id\": 2,\n                    \"lang\": \"en\",\n                    \"name\": \"Command name en\",\n                    \"description\": \"description en\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/command/list/all",
    "title": "7. List commands no limit",
    "version": "1.0.0",
    "name": "List_commands_no_limit",
    "group": "Command",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"is_enable\": true,\n            \"created_at\": \"2020-08-18 09:19:49\",\n            \"translation\": {\n                \"command_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Command name en\",\n                \"description\": \"description en\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/list/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/command/show/:command_id",
    "title": "2. Show command",
    "version": "1.0.0",
    "name": "Show_command",
    "group": "Command",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"id\": 2,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 09:19:49\",\n        \"translations\": [\n            {\n                \"command_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Command name en\",\n                \"description\": \"description en\"\n            },\n            {\n                \"command_id\": 2,\n                \"lang\": \"jp\",\n                \"name\": \"Command name jp\",\n                \"description\": \"description jp\"\n            },\n            {\n                \"command_id\": 2,\n                \"lang\": \"km\",\n                \"name\": \"Command name km\",\n                \"description\": \"description km\"\n            },\n            {\n                \"command_id\": 2,\n                \"lang\": \"zh\",\n                \"name\": \"Command name zh\",\n                \"description\": \"description zh\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/show/:command_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/command/update/:command_id",
    "title": "4. Update command",
    "version": "1.0.0",
    "name": "Update_command",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Command name en updated\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Command name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Command name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Command name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/update/:command_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/command/status/:command_id",
    "title": "5. Update command status",
    "version": "1.0.0",
    "name": "Update_command_status",
    "group": "Command",
    "filename": "./command.js",
    "groupTitle": "Command",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/command/status/:command_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/customer/create",
    "title": "3. Create Customer",
    "version": "1.0.0",
    "name": "Create_Customer",
    "group": "Customer",
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"first_name\" : \"Sophanith\",\n\t\"last_name\" : \"Chhoun\",\n\t\"gender\" : \"male\",\n\t\"phone_number\" : \"012345678\",\n\t\"email\" : \"testing@codingate.com\",\n\t\"password\" : \"123\",\n\t\"address\" : \"Phnom Penh\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/customer/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/customer/delete/:customer_id",
    "title": "6. Delete Customer",
    "version": "1.0.0",
    "name": "Delete_Customer",
    "group": "Customer",
    "filename": "./customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/customer/delete/:customer_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/customer/list",
    "title": "1. List Customer",
    "version": "1.0.0",
    "name": "List_Customer",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Locale",
            "description": "<p>Prefer Language(en || km). Fallback Language is &quot;en&quot;.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json =&gt; return response as JSON</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"list\": [\n           {\n               \"id\": 1,\n               \"first_name\": \"Sophanith\",\n               \"last_name\": \"Chhoun\",\n               \"email\": \"testing@codingate.com\",\n               \"gender\": \"male\",\n               \"phone_number\": \"012345678\",\n               \"address\": \"Phnom Penh\",\n               \"is_enable\": true,\n               \"is_none_customer\": 1,\n               \"created_at\": \"2020-07-11 19:59:05\",\n               \"updated_at\": \"2020-07-11 20:00:08\"\n           }\n       ],\n       \"total\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/customer/list"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/customer/show/:customer_id",
    "title": "2. Show Customer",
    "version": "1.0.0",
    "name": "Show_Customer",
    "group": "Customer",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 1,\n        \"first_name\": \"Sophanith\",\n        \"last_name\": \"Chhoun\",\n        \"email\": \"testing@codingate.com\",\n        \"gender\": \"male\",\n        \"phone_number\": \"012345678\",\n        \"address\": \"Phnom Penh\",\n        \"is_enable\": true,\n        \"is_none_customer\": 1,\n        \"created_at\": \"2020-07-11 19:59:05\",\n        \"updated_at\": \"2020-07-11 19:59:05\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/customer/show/:customer_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/customer/update/:customer_id",
    "title": "4. Update Customer",
    "version": "1.0.0",
    "name": "Update_Customer",
    "group": "Customer",
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"first_name\" : \"Sophanith\",\n\t\"last_name\" : \"Chhoun\",\n\t\"gender\" : \"male\",\n\t\"phone_number\" : \"012345678\",\n\t\"email\" : \"testing@codingate.com\",\n\t\"password\" : \"123\",\n\t\"address\" : \"Phnom Penh\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/customer/update/:customer_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/customer/status/:customer_id",
    "title": "5. Update Customer Status",
    "version": "1.0.0",
    "name": "Update_Customer_Status",
    "group": "Customer",
    "filename": "./customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/customer/status/:customer_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility/create",
    "title": "3. Create facility",
    "version": "1.0.0",
    "name": "Create_facility",
    "group": "Facility",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of command</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "facility_category_id",
            "description": "<p>Facility category id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>Image base64</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Facility name en\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Facility name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Facility name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Facility name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"facility_category_id\": 2,\n\t\"image\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n\t\"order\": 1,\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility/delete/:facility_id",
    "title": "6. Delete facility",
    "version": "1.0.0",
    "name": "Delete_facility",
    "group": "Facility",
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/delete/:facility_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/facility/list/all",
    "title": "7. List All Facilities",
    "version": "1.0.0",
    "name": "List_All_Facilities",
    "group": "Facility",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"facility_category_id\": 2,\n            \"media_id\": 17,\n            \"order\": 1,\n            \"is_enable\": true,\n            \"created_at\": \"2020-08-18 11:08:05\",\n            \"translation\": {\n                \"facility_category_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Facility category name en\",\n                \"description\": \"description en\"\n            },\n            \"media\": {\n                \"file_url\": \"http://127.0.0.1:8081/uploads/images/69a2cde49fbec1023695157fc45cc0df.png\",\n                \"file_name\": \"69a2cde49fbec1023695157fc45cc0df.png\",\n                \"file_type\": \"image\",\n                \"size\": \"original\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/list/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/facility/list",
    "title": "1. List facility",
    "version": "1.0.0",
    "name": "List_facility",
    "group": "Facility",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 2,\n                \"facility_category_id\": 2,\n                \"media_id\": 17,\n                \"order\": 1,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 11:08:05\",\n                \"translation\": {\n                    \"facility_category_id\": 2,\n                    \"lang\": \"en\",\n                    \"name\": \"Facility category name en\",\n                    \"description\": \"description en\"\n                },\n                \"media\": {\n                    \"file_url\": \"http://127.0.0.1:8081/uploads/images/69a2cde49fbec1023695157fc45cc0df.png\",\n                    \"file_name\": \"69a2cde49fbec1023695157fc45cc0df.png\",\n                    \"file_type\": \"image\",\n                    \"size\": \"original\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/facility/show/:facility_id",
    "title": "2. Show facility",
    "version": "1.0.0",
    "name": "Show_facility",
    "group": "Facility",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 2,\n        \"facility_category_id\": 2,\n        \"media_id\": 17,\n        \"order\": 1,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 11:08:05\",\n        \"translations\": [\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Facility category name en\",\n                \"description\": \"description en\"\n            },\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"jp\",\n                \"name\": \"Facility category name jp\",\n                \"description\": \"description jp\"\n            },\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"km\",\n                \"name\": \"Facility category name km\",\n                \"description\": \"description km\"\n            },\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"zh\",\n                \"name\": \"Facility category name zh\",\n                \"description\": \"description zh\"\n            }\n        ],\n        \"media\": {\n            \"file_url\": \"http://127.0.0.1:8081/uploads/images/69a2cde49fbec1023695157fc45cc0df.png\",\n            \"file_name\": \"69a2cde49fbec1023695157fc45cc0df.png\",\n            \"file_type\": \"image\",\n            \"size\": \"original\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/show/:facility_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility/update/:facility_id",
    "title": "4. Update facility",
    "version": "1.0.0",
    "name": "Update_facility",
    "group": "Facility",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "facility_id",
            "description": "<p>Facility id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of command</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "facility_category_id",
            "description": "<p>Facility category id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "image",
            "description": "<p>Image base64</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Facility name en update\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Facility name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Facility name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Facility name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"facility_category_id\": 2,\n\t\"image\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n\t\"order\": 1,\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/update/:facility_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility/status/:facility_id",
    "title": "5. Update facility Status",
    "version": "1.0.0",
    "name": "Update_facility_Status",
    "group": "Facility",
    "filename": "./facility.js",
    "groupTitle": "Facility",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility/status/:facility_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility_category/create",
    "title": "3. Create Facility Category",
    "version": "1.0.0",
    "name": "Create_Facility_Category",
    "group": "Facility_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of command</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Facility category name en\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Facility category name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Facility category name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Facility category name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"order\": 1,\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility_category/delete/:facility_category_id",
    "title": "6. Delete Facility Category",
    "version": "1.0.0",
    "name": "Delete_Facility_Category",
    "group": "Facility_Category",
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/delete/:facility_category_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/facility_category/list/all",
    "title": "0. List All Facility Category",
    "version": "1.0.0",
    "name": "List_All_Facility_Category",
    "group": "Facility_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json =&gt; return response as JSON</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"order\": 1,\n            \"is_enable\": true,\n            \"created_at\": \"2020-08-18 10:24:35\",\n            \"translation\": {\n                \"facility_category_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Facility category name en\",\n                \"description\": \"description en\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/list/all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/facility_category/list",
    "title": "1. List Facility Category",
    "version": "1.0.0",
    "name": "List_Facility_Category",
    "group": "Facility_Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json =&gt; return response as JSON</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 2,\n                \"order\": 1,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 10:24:35\",\n                \"translation\": {\n                    \"facility_category_id\": 2,\n                    \"lang\": \"en\",\n                    \"name\": \"Facility category name en\",\n                    \"description\": \"description en\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/list"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/facility_category/show/:facility_category_id",
    "title": "2. Show Facility Category",
    "version": "1.0.0",
    "name": "Show_Facility_Category",
    "group": "Facility_Category",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 2,\n        \"order\": 1,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 10:24:35\",\n        \"translations\": [\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Facility category name en\",\n                \"description\": \"description en\"\n            },\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"jp\",\n                \"name\": \"Facility category name jp\",\n                \"description\": \"description jp\"\n            },\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"km\",\n                \"name\": \"Facility category name km\",\n                \"description\": \"description km\"\n            },\n            {\n                \"facility_category_id\": 2,\n                \"lang\": \"zh\",\n                \"name\": \"Facility category name zh\",\n                \"description\": \"description zh\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/show/:facility_category_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility_category/update/:facility_category_id",
    "title": "4. Update Facility Category",
    "version": "1.0.0",
    "name": "Update_Facility_Category",
    "group": "Facility_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of command</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of command</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Facility category name en updated\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Facility category name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Facility category name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Facility category name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"order\": 1,\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/update/:facility_category_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/facility_category/status/:facility_category_id",
    "title": "5. Update Facility Category Status",
    "version": "1.0.0",
    "name": "Update_Facility_Category_Status",
    "group": "Facility_Category",
    "filename": "./facility_category.js",
    "groupTitle": "Facility_Category",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/facility_category/status/:facility_category_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/faq/create",
    "title": "3. Create Faq",
    "version": "1.0.0",
    "name": "Create_Faq",
    "group": "Faq",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.question",
            "description": "<p>FAQ question</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.answer",
            "description": "<p>FAQ answer</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"question\" : \"Question en?\",\n\t\t\"answer\": \"Answer en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"question\" : \"Question km?\",\n\t\t\"answer\": \"Answer km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"question\" : \"Question zh?\",\n\t\t\"answer\": \"Answer zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"question\" : \"Question jp?\",\n\t\t\"answer\": \"Answer jp\"\n\t}],\n\t\"order\": 1,\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./Faq.js",
    "groupTitle": "Faq",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/faq/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/faq/delete/:faq_id",
    "title": "6. Delete Faq",
    "version": "1.0.0",
    "name": "Delete_Faq",
    "group": "Faq",
    "filename": "./Faq.js",
    "groupTitle": "Faq",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/faq/delete/:faq_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/faq/list",
    "title": "1. List Faq",
    "version": "1.0.0",
    "name": "List_Faq",
    "group": "Faq",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 3,\n                \"order\": 1,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 11:40:01\",\n                \"translation\": {\n                    \"faq_id\": 3,\n                    \"lang\": \"en\",\n                    \"question\": \"Question en?\",\n                    \"answer\": \"Answer en\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Faq.js",
    "groupTitle": "Faq",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/faq/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/faq/show/:faq_id",
    "title": "2. Show Faq",
    "version": "1.0.0",
    "name": "Show_Faq",
    "group": "Faq",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 3,\n        \"order\": 1,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 11:40:01\",\n        \"translations\": [\n            {\n                \"faq_id\": 3,\n                \"lang\": \"en\",\n                \"question\": \"Question en?\",\n                \"answer\": \"Answer en\"\n            },\n            {\n                \"faq_id\": 3,\n                \"lang\": \"jp\",\n                \"question\": \"Question jp?\",\n                \"answer\": \"Answer jp\"\n            },\n            {\n                \"faq_id\": 3,\n                \"lang\": \"km\",\n                \"question\": \"Question km?\",\n                \"answer\": \"Answer km\"\n            },\n            {\n                \"faq_id\": 3,\n                \"lang\": \"zh\",\n                \"question\": \"Question zh?\",\n                \"answer\": \"Answer zh\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Faq.js",
    "groupTitle": "Faq",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/faq/show/:faq_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/faq/update/:faq_id",
    "title": "4. Update Faq",
    "version": "1.0.0",
    "name": "Update_Faq",
    "group": "Faq",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "faq_id",
            "description": "<p>FAQ id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.question",
            "description": "<p>FAQ question</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.answer",
            "description": "<p>FAQ answer</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"question\" : \"Question en updated?\",\n\t\t\"answer\": \"Answer en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"question\" : \"Question km?\",\n\t\t\"answer\": \"Answer km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"question\" : \"Question zh?\",\n\t\t\"answer\": \"Answer zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"question\" : \"Question jp?\",\n\t\t\"answer\": \"Answer jp\"\n\t}],\n\t\"order\": 1,\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./Faq.js",
    "groupTitle": "Faq",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/faq/update/:faq_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/faq/status/:faq_id",
    "title": "5. Update Faq Status",
    "version": "1.0.0",
    "name": "Update_Faq_Status",
    "group": "Faq",
    "filename": "./Faq.js",
    "groupTitle": "Faq",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/faq/status/:faq_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/news/create",
    "title": "3. Create news and event",
    "version": "1.0.0",
    "name": "Create_news_and_event",
    "group": "News_and_Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n    \"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"title\" : \"News and Event\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"title\" : \"News and Event km\"\n\t},\n\t{\n\t\t\"lang\" : \"zh\",\n\t\t\"title\" : \"News and Event zh\"\n\t},\n\t{\n\t\t\"lang\" : \"jp\",\n\t\t\"title\" : \"News and Event jp\"\n\t}],\n    \"image\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n    \"contents\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"type\" : \"text\",\n\t\t\"content\" : \"Liquid news && event en\"\n\t},\n\t{\n\t\t\"lang\" : \"km\",\n\t\t\"type\" : \"text\",\n\t\t\"content\" : \"Liquid news && event km\"\n\t},\n\t {\n\t\t\"lang\" : \"en\",\n\t\t\"type\" : \"image\",\n\t\t\"content\" : \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\"\n\t}],\n    \"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./news_and_event.js",
    "groupTitle": "News_and_Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/news/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/news/delete/:news_id",
    "title": "6. Delete news and event",
    "version": "1.0.0",
    "name": "Delete_news_and_event",
    "group": "News_and_Event",
    "filename": "./news_and_event.js",
    "groupTitle": "News_and_Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/news/delete/:news_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/news/list",
    "title": "1. List news and events",
    "version": "1.0.0",
    "name": "List_news_and_events",
    "group": "News_and_Event",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 3,\n                \"media_id\": 12,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-17 11:52:33\",\n                \"deleted_at\": null,\n                \"translation\": {\n                    \"news_id\": 3,\n                    \"lang\": \"en\",\n                    \"title\": \"News and Event update\"\n                },\n                \"media\": {\n                    \"file_url\": \"http://127.0.0.1:8081/uploads/images/66717acc333418b31fdfcdb0d5394ab8.png\",\n                    \"file_name\": \"66717acc333418b31fdfcdb0d5394ab8.png\",\n                    \"file_type\": \"image\",\n                    \"size\": \"original\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./news_and_event.js",
    "groupTitle": "News_and_Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/news/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/news/show/:news_id",
    "title": "2. Show news and event",
    "version": "1.0.0",
    "name": "Show_news_and_event",
    "group": "News_and_Event",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"id\": 3,\n        \"media_id\": 12,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-17 11:52:33\",\n        \"deleted_at\": null,\n        \"translations\": [\n            {\n                \"news_id\": 3,\n                \"lang\": \"en\",\n                \"title\": \"News and Event update\"\n            },\n            {\n                \"news_id\": 3,\n                \"lang\": \"jp\",\n                \"title\": \"News and Event jp\"\n            },\n            {\n                \"news_id\": 3,\n                \"lang\": \"km\",\n                \"title\": \"News and Event km\"\n            },\n            {\n                \"news_id\": 3,\n                \"lang\": \"zh\",\n                \"title\": \"News and Event zh\"\n            }\n        ],\n        \"media\": {\n            \"file_url\": \"http://127.0.0.1:8081/uploads/images/66717acc333418b31fdfcdb0d5394ab8.png\",\n            \"file_name\": \"66717acc333418b31fdfcdb0d5394ab8.png\",\n            \"file_type\": \"image\",\n            \"size\": \"original\"\n        },\n        \"contents\": [\n            {\n                \"id\": 4,\n                \"type_id\": 1,\n                \"news_id\": 3,\n                \"media_id\": null,\n                \"video_url\": null,\n                \"content\": \"Liquid news && event en update\",\n                \"lang\": \"en\",\n                \"type\": \"text\",\n                \"media\": null\n            },\n            {\n                \"id\": 5,\n                \"type_id\": 1,\n                \"news_id\": 3,\n                \"media_id\": null,\n                \"video_url\": null,\n                \"content\": \"Liquid news && event km update\",\n                \"lang\": \"km\",\n                \"type\": \"text\",\n                \"media\": null\n            },\n            {\n                \"id\": 6,\n                \"type_id\": 2,\n                \"news_id\": 3,\n                \"media_id\": null,\n                \"video_url\": null,\n                \"content\": {\n                    \"media_id\": 13,\n                    \"file_url\": \"http://127.0.0.1:8081/uploads/images/2d2d44a2f72db733c2e76c19fa45fe00.png\",\n                    \"file_name\": \"2d2d44a2f72db733c2e76c19fa45fe00.png\",\n                    \"file_type\": \"image\",\n                    \"size\": \"original\"\n                },\n                \"lang\": \"en\",\n                \"type\": \"image\",\n                \"media\": null\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./news_and_event.js",
    "groupTitle": "News_and_Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/news/show/:news_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/news/update/:news_id",
    "title": "4. Update news ane event",
    "version": "1.0.0",
    "name": "Update_news_and_event",
    "group": "News_and_Event",
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n    \"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"title\" : \"News and Event update\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"title\" : \"News and Event km\"\n\t},\n\t{\n\t\t\"lang\" : \"zh\",\n\t\t\"title\" : \"News and Event zh\"\n\t},\n\t{\n\t\t\"lang\" : \"jp\",\n\t\t\"title\" : \"News and Event jp\"\n\t}],\n    \"image\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n    \"contents\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"type\" : \"text\",\n\t\t\"content\" : \"Liquid news && event en update\"\n\t},\n\t{\n\t\t\"lang\" : \"km\",\n\t\t\"type\" : \"text\",\n\t\t\"content\" : \"Liquid news && event km update\"\n\t},\n\t {\n\t\t\"lang\" : \"en\",\n\t\t\"type\" : \"image\",\n\t\t\"content\" : \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\"\n\t}],\n    \"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./news_and_event.js",
    "groupTitle": "News_and_Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/news/update/:news_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/news/status/:news_id",
    "title": "5. Update news and event Status",
    "version": "1.0.0",
    "name": "Update_news_and_event_Status",
    "group": "News_and_Event",
    "filename": "./news_and_event.js",
    "groupTitle": "News_and_Event",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/news/status/:news_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/menu/list",
    "title": "1. List Menu",
    "version": "1.0.0",
    "name": "List_Menu",
    "group": "Permission",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": [\n       {\n           \"id\": 1,\n           \"name\": \"Dashboard\",\n           \"code\": \"dashboard\",\n           \"icon\": \"icon-grid\",\n           \"url\": \"admin\",\n           \"is_label\": 0,\n           \"sub\": [],\n           \"access_rights\": [\n               \"read\"\n           ]\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Menu\",\n           \"code\": null,\n           \"icon\": null,\n           \"url\": null,\n           \"is_label\": 1,\n           \"sub\": [],\n           \"access_rights\": []\n       },\n       {\n           \"id\": 3,\n           \"name\": \"Agency\",\n           \"code\": \"customer\",\n           \"icon\": \"fa fa-users\",\n           \"url\": \"admin/customer\",\n           \"is_label\": 0,\n           \"sub\": [],\n           \"access_rights\": [\n               \"read\"\n           ]\n       },\n       {\n           \"id\": 4,\n           \"name\": \"Announcements\",\n           \"code\": null,\n           \"icon\": \"fa fa-bullhorn\",\n           \"url\": null,\n           \"is_label\": 0,\n           \"sub\": [\n               {\n                   \"id\": 5,\n                   \"name\": \"Announcement Categories\",\n                   \"code\": \"announcement-category\",\n                   \"icon\": null,\n                   \"url\": \"admin/announcement_category\",\n                   \"is_label\": 0,\n                   \"sub\": null,\n                   \"access_rights\": [\n                       \"read\",\n                       \"create\",\n                       \"update\",\n                       \"delete\",\n                       \"publish\"\n                   ]\n               },\n               {\n                   \"id\": 6,\n                   \"name\": \"Announcement\",\n                   \"code\": \"announcement\",\n                   \"icon\": null,\n                   \"url\": \"admin/announcement\",\n                   \"is_label\": 0,\n                   \"sub\": null,\n                   \"access_rights\": [\n                       \"create\",\n                       \"update\",\n                       \"delete\",\n                       \"publish\",\n                       \"set-feature\",\n                       \"send-notification\",\n                       \"read\"\n                   ]\n               }\n           ],\n           \"access_rights\": []\n       },\n       {\n           \"id\": 7,\n           \"name\": \"Contacts\",\n           \"code\": \"contact\",\n           \"icon\": \"fa fa-address-book-o\",\n           \"url\": \"admin/announcement\",\n           \"is_label\": 0,\n           \"sub\": [],\n           \"access_rights\": [\n               \"read\"\n           ]\n       },\n       {\n           \"id\": 20,\n           \"name\": \"Configuration\",\n           \"code\": null,\n           \"icon\": null,\n           \"url\": null,\n           \"is_label\": 1,\n           \"sub\": [],\n           \"access_rights\": []\n       },\n       {\n           \"id\": 27,\n           \"name\": \"Setting\",\n           \"code\": \"setting\",\n           \"icon\": \"fa fa-cogs\",\n           \"url\": \"admin/setting\",\n           \"is_label\": 0,\n           \"sub\": [],\n           \"access_rights\": [\n               \"read\",\n               \"update\"\n           ]\n       },\n       {\n           \"id\": 28,\n           \"name\": \"Users\",\n           \"code\": null,\n           \"icon\": \"fa fa-user-o\",\n           \"url\": null,\n           \"is_label\": 0,\n           \"sub\": [\n               {\n                   \"id\": 29,\n                   \"name\": \"Roles\",\n                   \"code\": \"role\",\n                   \"icon\": null,\n                   \"url\": \"admin/role\",\n                   \"is_label\": 0,\n                   \"sub\": null,\n                   \"access_rights\": [\n                       \"read\",\n                       \"create\",\n                       \"update\",\n                       \"delete\",\n                       \"publish\"\n                   ]\n               },\n               {\n                   \"id\": 30,\n                   \"name\": \"Users\",\n                   \"code\": \"user\",\n                   \"icon\": null,\n                   \"url\": \"admin/role\",\n                   \"is_label\": 0,\n                   \"sub\": null,\n                   \"access_rights\": [\n                       \"read\",\n                       \"create\",\n                       \"update\",\n                       \"delete\",\n                       \"publish\"\n                   ]\n               }\n           ],\n           \"access_rights\": []\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Permission.js",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/menu/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/privacy/show",
    "title": "1. Show privacy policy",
    "version": "1.0.0",
    "name": "Show_privacy_policy",
    "group": "Privacy_policy",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 1,\n        \"translations\": [\n            {\n                \"id\": 5,\n                \"privacy_id\": 1,\n                \"description\": \"Privacy && policy en update\",\n                \"lang\": \"en\"\n            },\n            {\n                \"id\": 6,\n                \"privacy_id\": 1,\n                \"description\": \"Privacy && policy km\",\n                \"lang\": \"km\"\n            },\n            {\n                \"id\": 7,\n                \"privacy_id\": 1,\n                \"description\": \"Privacy && policy zh\",\n                \"lang\": \"zh\"\n            },\n            {\n                \"id\": 8,\n                \"privacy_id\": 1,\n                \"description\": \"Privacy && policy jp\",\n                \"lang\": \"jp\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./privacy_policy.js",
    "groupTitle": "Privacy_policy",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/privacy/show"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/privacy/update/:id",
    "title": "2. Update privacy policy",
    "version": "1.0.0",
    "name": "Update_privacy_policy",
    "group": "Privacy_policy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.description",
            "description": "<p>Address of branch or location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Latitude of location</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"description\" : \"Privacy && policy en update\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"description\" : \" Privacy && policy km\"\n\t},\n\t{\n\t\t\"lang\" : \"zh\",\n\t\t\"description\" : \"Privacy && policy zh\"\n\t},\n\t{\n\t\t\"lang\" : \"jp\",\n\t\t\"description\" : \"Privacy && policy jp\"\n\t}]\n}",
        "type": "curl"
      }
    ],
    "filename": "./privacy_policy.js",
    "groupTitle": "Privacy_policy",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/privacy/update/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/profile",
    "title": "1. Profile",
    "version": "1.0.0",
    "name": "Profile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"id\": 1,\n       \"first_name\": \"Codingate\",\n       \"last_name\": \"Technology\",\n       \"user_name\": \"Admin\",\n       \"email\": \"admin@codingate.com\",\n       \"gender\": null,\n       \"phone_number\": \"092 77 00 99\",\n       \"address\": null,\n       \"media_id\": null,\n       \"is_enable\": true,\n       \"created_by\": 1,\n       \"updated_by\": null,\n       \"created_at\": null,\n       \"updated_at\": \"2020-01-11 03:02:03\",\n       \"media\": null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"User is unauthorized. The Token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      }
    },
    "filename": "./Profile.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/profile"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/admin/update/password",
    "title": "3. Update Password",
    "version": "1.0.0",
    "name": "Update_Password",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Old Password of the User.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"new_password\" : \"newpassword\",\n\t\"old_password\" : \"password\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"id\": 1,\n       \"first_name\": \"Codingate\",\n       \"last_name\": \"Technology\",\n       \"user_name\": \"admin\",\n       \"email\": \"admin@codingate.com\",\n       \"gender\": null,\n       \"phone_number\": \"086 457 447\",\n       \"address\": null,\n       \"media_id\": null,\n       \"is_enable\": true,\n       \"created_by\": 1,\n       \"updated_by\": 1,\n       \"created_at\": \"2020-01-11 03:46:54\",\n       \"updated_at\": \"2020-01-11 03:46:54\",\n       \"media\": {\n           \"file_url\": \"http://api.aia.local/uploads/images/e81abaf811c2128ff9511683c7e82d99.png\",\n           \"file_name\": \"e81abaf811c2128ff9511683c7e82d99.png\",\n           \"size\": \"Original\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Profile.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/update/password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/admin/profile/update",
    "title": "2. Update Profile",
    "version": "1.0.0",
    "name": "Update_Profile",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>User name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone Number of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>Gender of the User. in <code>male</code> or <code>female</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"first_name\" : \"Codingate\",\n\t\"last_name\" : \"Technology\",\n\t\"email\" : \"admin@codingate.com\",\n\t\"user_name\" : \"admin\",\n\t\"phone_number\" : \"012 123 123\",\n\t\"gender\" : \"male\",\n\t\"address\" : \"Phnom Penh\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"id\": 1,\n       \"first_name\": \"Codingate\",\n       \"last_name\": \"Technology\",\n       \"user_name\": \"admin\",\n       \"email\": \"admin@codingate.com\",\n       \"gender\": null,\n       \"phone_number\": \"086 457 447\",\n       \"address\": null,\n       \"media_id\": null,\n       \"is_enable\": true,\n       \"created_by\": 1,\n       \"updated_by\": 1,\n       \"created_at\": \"2020-01-11 03:46:54\",,\n       \"updated_at\": \"2020-01-11 03:46:54\",\n       \"media\": {\n           \"file_url\": \"http://api.aia.local/uploads/images/e81abaf811c2128ff9511683c7e82d99.png\",\n           \"file_name\": \"e81abaf811c2128ff9511683c7e82d99.png\",\n           \"size\": \"Original\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The User is not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Profile.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/profile/update"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/admin/update/picture",
    "title": "4. Update Profile Picture",
    "version": "1.0.0",
    "name": "Update_Profile_Picture",
    "group": "Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Base64 Image</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"image\" : \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\"\n }",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"id\": 1,\n       \"first_name\": \"Codingate\",\n       \"last_name\": \"Technology\",\n       \"user_name\": \"admin\",\n       \"email\": \"admin@codingate.com\",\n       \"gender\": null,\n       \"phone_number\": \"086 457 447\",\n       \"address\": null,\n       \"media_id\": 1,\n       \"is_enable\": true,\n       \"created_by\": 1,\n       \"updated_by\": 1,\n       \"created_at\": null,\n       \"updated_at\": \"2020-01-11 04:22:04\",\n       \"media\": {\n           \"file_url\": \"http://api.aia.local/uploads/images/e81abaf811c2128ff9511683c7e82d99.png\",\n           \"file_name\": \"e81abaf811c2128ff9511683c7e82d99.png\",\n           \"size\": \"Original\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Profile.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/update/picture"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/admin/property/create",
    "title": "3. Create Property",
    "version": "1.0.0",
    "name": "Create_Property",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of property</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.address",
            "description": "<p>Address of property</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "medias.content",
            "description": "<p>Base64 image</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "media_id",
            "description": "<p>Media id if no upload new image. Value can be empty.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "price",
            "description": "<p>Price of property</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" :{\n\t\t\"name\" : \"Hello\",\n\t\t\"address\": \"Address en\"\n\t},\n\t\"medias\": [\n\t\t{\n\t\t\t\"content\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n\t\t\t\"media_id\": null\n\t\t},\n\t\t{\n\t\t\t\"content\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n\t\t\t\"media_id\": null\n\t\t}\n\t],\n\t\"price\": \"1000\"\n}",
        "type": "curl"
      }
    ],
    "filename": "./property.js",
    "groupTitle": "Property",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property/delete/:property_id",
    "title": "6. Delete Property",
    "version": "1.0.0",
    "name": "Delete_Property",
    "group": "Property",
    "filename": "./property.js",
    "groupTitle": "Property",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property/delete/:property_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property/list",
    "title": "1. List Property",
    "version": "1.0.0",
    "name": "List_Property",
    "group": "Property",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                {\n                \"id\": 40,\n                \"translation\": {\n                    \"property_id\": 40,\n                    \"lang\": \"en\",\n                    \"name\": \"Property name en\",\n                    \"address\": \"Address en\",\n                    \"description\": \"description en\"\n                },\n                \"facility_categories\": [\n                    {\n                        \"name\": \"Facility category name en\"\n                    },\n                    {\n                        \"name\": \"Facility category name en\"\n                    },\n                    {\n                        \"name\": \"Facility category name en\"\n                    }\n                ],\n                \"price\": \"1000.00\",\n                \"image\": \"http://127.0.0.1:8081/uploads/images/ccc160097065b3b566f96abbffd83d01.png\",\n                \"created_at\": \"2020-10-21T03:57:17.000000Z\",\n                \"is_enable\": true\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property.js",
    "groupTitle": "Property",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property/show/:property_id",
    "title": "2. Show Property",
    "version": "1.0.0",
    "name": "Show_Property",
    "group": "Property",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"id\": 37,\n        \"price\": \"1000.00\",\n        \"latitude\": \"10.9366649\",\n        \"longitude\": \"104.4728177\",\n        \"is_enable\": true,\n        \"medias\": [\n            {\n                \"file_url\": \"http://127.0.0.1:8081/uploads/images/9da8661332427cc7a733e2c676bb3945.png\",\n                \"file_name\": \"9da8661332427cc7a733e2c676bb3945.png\",\n                \"file_type\": \"image\",\n                \"size\": \"original\",\n                \"pivot\": {\n                    \"property_id\": 37,\n                    \"media_id\": 138\n                }\n            },\n            {\n                \"file_url\": \"http://127.0.0.1:8081/uploads/images/0e805bccc1ce85295c56224aad4d5423.png\",\n                \"file_name\": \"0e805bccc1ce85295c56224aad4d5423.png\",\n                \"file_type\": \"image\",\n                \"size\": \"original\",\n                \"pivot\": {\n                    \"property_id\": 37,\n                    \"media_id\": 139\n                }\n            }\n        ],\n        \"languages\": [\n            {\n                \"title\": \"English\",\n                \"code\": \"en\",\n                \"translations\": {\n                    \"property_id\": 37,\n                    \"lang\": \"en\",\n                    \"name\": \"Property name en\",\n                    \"address\": \"Address en\",\n                    \"description\": \"description en\"\n                }\n            },\n            {\n                \"title\": \"ខ្មែរ\",\n                \"code\": \"km\",\n                \"translations\": {\n                    \"property_id\": 37,\n                    \"lang\": \"km\",\n                    \"name\": \"Property name km\",\n                    \"address\": \"Address km\",\n                    \"description\": \"description km\"\n                }\n            },\n            {\n                \"title\": \"中文\",\n                \"code\": \"zh\",\n                \"translations\": {\n                    \"property_id\": 37,\n                    \"lang\": \"zh\",\n                    \"name\": \"Property name zh\",\n                    \"address\": \"Address zh\",\n                    \"description\": \"description zh\"\n                }\n            },\n            {\n                \"title\": \"日本人\",\n                \"code\": \"jp\",\n                \"translations\": {\n                    \"property_id\": 37,\n                    \"lang\": \"jp\",\n                    \"name\": \"Property name jp\",\n                    \"address\": \"Address jp\",\n                    \"description\": \"description jp\"\n                }\n            }\n        ],\n        \"facility_ids\": [\n            2\n        ],\n        \"facility_category_id\": [\n            1,\n            2,\n            3\n        ],\n        \"command_id\": 1,\n        \"province_id\": 2,\n        \"property_type_id\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property.js",
    "groupTitle": "Property",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property/show/:property_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property/update/:property_id",
    "title": "4. Update Property",
    "version": "1.0.0",
    "name": "Update_Property",
    "group": "Property",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of property</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.address",
            "description": "<p>Address of property</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "medias.content",
            "description": "<p>Base64 image</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "media_id",
            "description": "<p>Media id if no upload new image. Value can be empty.</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal",
            "optional": false,
            "field": "price",
            "description": "<p>Price of property</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" :{\n\t\t\"name\" : \"Hello\",\n\t\t\"address\": \"Address en\"\n\t},\n\t\"medias\": [\n\t\t{\n\t\t\t\"content\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n\t\t\t\"media_id\": null\n\t\t},\n\t\t{\n\t\t\t\"content\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAEAAQAMBIQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBQQGCP/aAAgBAQAAAAD6pWsqszVdjGhQP87sc16Sqdm9uTy+jVH5vZEdFW3JiUb4GRSRUaAXVMP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAD/xAA7EAACAQMBBAUHCgcAAAAAAAABAgMABBEFEiExURATFEFxFSIjJDKRsjM0U2FiZHWSscEWIHJzdJOh/9oACAEBAAE/AKkmWPA3ljwUcTQSd97ybA5Jx99G1tsDzCx7yxJrstvg4XZ5bJIrq7lfk5OsHJ+P5qimR8g5DDip49EsnVruGWJwo5moo9jJJy7e01dfbgkNMgI7iwFdog+mj/MK7RB9NH+YUCCAQcg1LCHUMDh13q3Lx8aifbU5GHG5l5GkG1PI/cnmL+/Rpum6fcC/knsoJH7fcDbdAzbnoaBo/fp9r/qWpNG0nq3I0213A8IlrRCPIelj7uvQxK3UcndIdhv2q1Pq6faJY/WSejRz6DUfxK4+OrqRobS5mUAskTsAeG4Z34qH+IJ7OOXrLBVljDfJyZG0P6qMeuaVpRAlsnS1tyQCkm0Qg+phUTF4YmIGWQE+Jq6+bse9cN7jVqfV0GfZyv8A3o0c+g1H8SuPjq+A8nagfu0nwmrEjydp4+7R/CK11dnR9Q/xpfhNW/zeH+2n6VdD1Zs8WIUDmSaTK3MkXASHbUfr0NosCyTNFe3sfWSNIwSXZXLHJwBUlgYLO/CXF1MzwSALI+3vweFWeq9VZW0T6fqGUiRWAt34qK1HUu0adewx6ff7ckLoubd+JFQZFvCDxCD9Kc7U8adyHbbx7qljDqMHDqcq3I1DKHBVhh13MOXh4/yzSbGAN7n2VqGPYXecsxyx5noliR8EZDDgw41t3Cn0iGQc04+40Ly3A9oq32gRiu1W+D55Y9wUE0XnfckewOb8fdUcKx5O8seLHiej/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAD/9k=\",\n\t\t\t\"media_id\": null\n\t\t}\n\t],\n\t\"price\": \"1000\"\n}",
        "type": "curl"
      }
    ],
    "filename": "./property.js",
    "groupTitle": "Property",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property/update/:property_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property/status/:property_id",
    "title": "5. Update Property Status",
    "version": "1.0.0",
    "name": "Update_Property_Status",
    "group": "Property",
    "filename": "./property.js",
    "groupTitle": "Property",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property/status/:property_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_item/create",
    "title": "3. Create Property Item",
    "version": "1.0.0",
    "name": "Create_Property_Item",
    "group": "Property_Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "property_type_id",
            "description": "<p>Property type id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of property item</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of property item</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Property item name en\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Property item name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Property item name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Property item name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"property_type_id\": 2,\n\t\"order\": \"1\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./property_item.js",
    "groupTitle": "Property_Item",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_item/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_item/delete/:property_item_id",
    "title": "6. Delete Property Item",
    "version": "1.0.0",
    "name": "Delete_Property_Item",
    "group": "Property_Item",
    "filename": "./property_item.js",
    "groupTitle": "Property_Item",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_item/delete/:property_item_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property_item/list",
    "title": "1. List Property Item",
    "version": "1.0.0",
    "name": "List_Property_Item",
    "group": "Property_Item",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 4,\n                \"property_type_id\": 2,\n                \"order\": 1,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 22:12:53\",\n                \"translation\": {\n                    \"property_item_id\": 4,\n                    \"lang\": \"en\",\n                    \"name\": \"Property item name en\",\n                    \"description\": \"description en\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property_item.js",
    "groupTitle": "Property_Item",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_item/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property_item/show/:property_item_id",
    "title": "2. Show Property Item",
    "version": "1.0.0",
    "name": "Show_Property_Item",
    "group": "Property_Item",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 4,\n        \"property_type_id\": 2,\n        \"order\": 1,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 22:12:53\",\n        \"translations\": [\n            {\n                \"property_item_id\": 4,\n                \"lang\": \"en\",\n                \"name\": \"Property item name en\",\n                \"description\": \"description en\"\n            },\n            {\n                \"property_item_id\": 4,\n                \"lang\": \"jp\",\n                \"name\": \"Property item name jp\",\n                \"description\": \"description jp\"\n            },\n            {\n                \"property_item_id\": 4,\n                \"lang\": \"km\",\n                \"name\": \"Property item name km\",\n                \"description\": \"description km\"\n            },\n            {\n                \"property_item_id\": 4,\n                \"lang\": \"zh\",\n                \"name\": \"Property item name zh\",\n                \"description\": \"description zh\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property_item.js",
    "groupTitle": "Property_Item",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_item/show/:property_item_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_item/update/:property_item_id",
    "title": "4. Update Property Item",
    "version": "1.0.0",
    "name": "Update_Property_Item",
    "group": "Property_Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "property_type_id",
            "description": "<p>Property type id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of property item</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of property item</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Property item name en update\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Property item name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Property item name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Property item name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"property_type_id\": 2,\n\t\"order\": \"1\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./property_item.js",
    "groupTitle": "Property_Item",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_item/update/:property_item_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_item/status/:property_item_id",
    "title": "5. Update Property Item Status",
    "version": "1.0.0",
    "name": "Update_Property_Item_Status",
    "group": "Property_Item",
    "filename": "./property_item.js",
    "groupTitle": "Property_Item",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_item/status/:property_item_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_type/create",
    "title": "3. Create Property Type",
    "version": "1.0.0",
    "name": "Create_Property_Type",
    "group": "Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of property type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of property type</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Property type name en\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Property type name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Property type name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Property type name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"order\": \"1\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_type/delete/:property_type_id",
    "title": "6. Delete Property Type",
    "version": "1.0.0",
    "name": "Delete_Property_Type",
    "group": "Property_Type",
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/delete/:property_type_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property_type/list/all",
    "title": "0. List All Property Type",
    "version": "1.0.0",
    "name": "List_All_Property_Type",
    "group": "Property_Type",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json =&gt; return response as JSON</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"order\": 1,\n            \"is_enable\": true,\n            \"created_at\": \"2020-08-18 21:42:55\",\n            \"translation\": {\n                \"property_type_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Property type name en\",\n                \"description\": \"description en\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/list/all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property_type/list",
    "title": "1. List Property Type",
    "version": "1.0.0",
    "name": "List_Property_Type",
    "group": "Property_Type",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 2,\n                \"order\": 1,\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 21:42:55\",\n                \"translation\": {\n                    \"property_type_id\": 2,\n                    \"lang\": \"en\",\n                    \"name\": \"Property type name en\",\n                    \"description\": \"description en\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/property_type/show/:property_type_id",
    "title": "2. Show Property Type",
    "version": "1.0.0",
    "name": "Show_Property_Type",
    "group": "Property_Type",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 2,\n        \"order\": 1,\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 21:42:55\",\n        \"translations\": [\n            {\n                \"property_type_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Property type name en\",\n                \"description\": \"description en\"\n            },\n            {\n                \"property_type_id\": 2,\n                \"lang\": \"jp\",\n                \"name\": \"Property type name jp\",\n                \"description\": \"description jp\"\n            },\n            {\n                \"property_type_id\": 2,\n                \"lang\": \"km\",\n                \"name\": \"Property type name km\",\n                \"description\": \"description km\"\n            },\n            {\n                \"property_type_id\": 2,\n                \"lang\": \"zh\",\n                \"name\": \"Property type name zh\",\n                \"description\": \"description zh\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/show/:property_type_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_type/update/:property_type_id",
    "title": "4. Update Property Type",
    "version": "1.0.0",
    "name": "Update_Property_Type",
    "group": "Property_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of property type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of property type</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "order",
            "description": "<p>Sequence order</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Property type name en update\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Property type name km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Property type name zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Property type name jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"order\": \"1\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/update/:property_type_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/property_type/status/:property_type_id",
    "title": "5. Update Property Type Status",
    "version": "1.0.0",
    "name": "Update_Property_Type_Status",
    "group": "Property_Type",
    "filename": "./property_type.js",
    "groupTitle": "Property_Type",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/property_type/status/:property_type_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/province/create",
    "title": "3. Create province",
    "version": "1.0.0",
    "name": "Create_province",
    "group": "Province",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Takeo\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Takeo km\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Takeo zh\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Takeo jp\",\n\t\t\"description\": \"description jp\"\n\t}],\n\t\"latitude\": \"10.9366649\",\n\t\"longitude\": \"104.4728177\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/province/delete/:province_id",
    "title": "6. Delete province",
    "version": "1.0.0",
    "name": "Delete_province",
    "group": "Province",
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/delete/:province_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/province/list",
    "title": "1. List provinces",
    "version": "1.0.0",
    "name": "List_provinces",
    "group": "Province",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 2,\n                \"latitude\": \"10.9366649\",\n                \"longitude\": \"104.4728177\",\n                \"is_enable\": true,\n                \"created_at\": \"2020-08-18 08:12:51\",\n                \"translation\": {\n                    \"province_id\": 2,\n                    \"lang\": \"en\",\n                    \"name\": \"Takeo\",\n                    \"description\": \"description en\"\n                }\n            }\n        ],\n        \"total\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/province/list/all",
    "title": "1. List provinces no limit",
    "version": "1.0.0",
    "name": "List_provinces_no_limit",
    "group": "Province",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"latitude\": \"10.9366649\",\n            \"longitude\": \"104.4728177\",\n            \"is_enable\": true,\n            \"created_at\": \"2020-08-18 08:12:51\",\n            \"translation\": {\n                \"province_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Takeo\",\n                \"description\": \"description en\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/list/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/province/show/:province_id",
    "title": "2. Show province",
    "version": "1.0.0",
    "name": "Show_province",
    "group": "Province",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": " HTTP/1.1 200 Success Request\n {\n    \"success\": true,\n    \"data\": {\n        \"id\": 2,\n        \"latitude\": \"10.9366649\",\n        \"longitude\": \"104.4728177\",\n        \"is_enable\": true,\n        \"created_at\": \"2020-08-18 08:12:51\",\n        \"translations\": [\n            {\n                \"province_id\": 2,\n                \"lang\": \"en\",\n                \"name\": \"Takeo\",\n                \"description\": \"description en\"\n            },\n            {\n                \"province_id\": 2,\n                \"lang\": \"jp\",\n                \"name\": \"Takeo jp\",\n                \"description\": \"description jp\"\n            },\n            {\n                \"province_id\": 2,\n                \"lang\": \"km\",\n                \"name\": \"Takeo km\",\n                \"description\": \"description km\"\n            },\n            {\n                \"province_id\": 2,\n                \"lang\": \"zh\",\n                \"name\": \"Takeo zh\",\n                \"description\": \"description zh\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/show/:province_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/province/update/:province_id",
    "title": "4. Update province",
    "version": "1.0.0",
    "name": "Update_province",
    "group": "Province",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "translations",
            "description": "<p>Transaltions</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.name",
            "description": "<p>Name of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "translations.lang",
            "description": "<p>Language: <code>en</code>, <code>km</code>, <code>zh</code>, <code>jp</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "translations.description",
            "description": "<p>Description of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude of province</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_enable",
            "description": "<p>Enable status. Default is <code>true</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"translations\" : [{\n\t\t\"lang\" : \"en\",\n\t\t\"name\" : \"Takeo updated\",\n\t\t\"description\": \"description en\"\n\t},{\n\t\t\"lang\" : \"km\",\n\t\t\"name\" : \"Takeo km updated\",\n\t\t\"description\": \"description km\"\n\t},{\n\t\t\"lang\" : \"zh\",\n\t\t\"name\" : \"Takeo zh updated\",\n\t\t\"description\": \"description zh\"\n\t},{\n\t\t\"lang\" : \"jp\",\n\t\t\"name\" : \"Takeo jp updated\",\n\t\t\"description\": \"description jp updated\"\n\t}],\n\t\"latitude\": \"10.9366649\",\n\t\"longitude\": \"104.4728177\",\n\t\"is_enable\": true\n}",
        "type": "curl"
      }
    ],
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/update/:province_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/province/status/:province_id",
    "title": "5. Update province",
    "version": "1.0.0",
    "name": "Update_province",
    "group": "Province",
    "filename": "./province.js",
    "groupTitle": "Province",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/province/status/:province_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/role/create",
    "title": "4. Create Role",
    "version": "1.0.0",
    "name": "Create_Role",
    "group": "Role",
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"name\" : \"Editor\",\n\t\"description\" : \"Manage Project\",\n\t\"is_enable\" : true,\n\t\"permissions\" : [\n\t\t{\n\t\t\t\"permission_id\" : 1,\n\t\t\t\"actions\": \"read\"\n\t\t},{\n\t\t\t\"permission_id\" : 3,\n\t\t\t\"actions\" : \"read\"\n\t\t}\n\t]\n }",
        "type": "curl"
      }
    ],
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/role/delete/{id}",
    "title": "7. Delete Role",
    "version": "1.0.0",
    "name": "Delete_Role",
    "group": "Role",
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/delete/{id}"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/role/list/permissions",
    "title": "8. List All Permission",
    "version": "1.0.0",
    "name": "List_All_Permission",
    "group": "Role",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": [\n       {\n           \"id\": 1,\n           \"name\": \"Dashboard\",\n           \"code\": \"dashboard\",\n           \"icon\": \"icon-grid\",\n           \"actions\": [\n               \"read\"\n           ],\n           \"url\": \"admin\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": null,\n           \"sequence_order\": 1\n       },\n       {\n           \"id\": 3,\n           \"name\": \"Agency\",\n           \"code\": \"customer\",\n           \"icon\": \"fa fa-users\",\n           \"actions\": [\n               \"read\",\n               \"clear-session\"\n           ],\n           \"url\": \"admin/customer\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 2,\n           \"sequence_order\": 3\n       },\n       {\n           \"id\": 5,\n           \"name\": \"Announcement Categories\",\n           \"code\": \"announcement-category\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/announcement_category\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 4,\n           \"sequence_order\": 5\n       },\n       {\n           \"id\": 6,\n           \"name\": \"Announcement\",\n           \"code\": \"announcement\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\",\n               \"set-feature\",\n               \"send-notification\"\n           ],\n           \"url\": \"admin/announcement\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 4,\n           \"sequence_order\": 6\n       },\n       {\n           \"id\": 7,\n           \"name\": \"Contacts\",\n           \"code\": \"contact\",\n           \"icon\": \"fa fa-address-book-o\",\n           \"actions\": [\n               \"read\"\n           ],\n           \"url\": \"admin/announcement\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 2,\n           \"sequence_order\": 7\n       },\n       {\n           \"id\": 9,\n           \"name\": \"Document Categories\",\n           \"code\": \"document-category\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/document_category\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 8,\n           \"sequence_order\": 9\n       },\n       {\n           \"id\": 10,\n           \"name\": \"Documents\",\n           \"code\": \"document\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\",\n               \"send-notification\"\n           ],\n           \"url\": \"admin/document\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 8,\n           \"sequence_order\": 10\n       },\n       {\n           \"id\": 12,\n           \"name\": \"Event Categories\",\n           \"code\": \"event-category\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/event_category\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 11,\n           \"sequence_order\": 12\n       },\n       {\n           \"id\": 13,\n           \"name\": \"Events\",\n           \"code\": \"event\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\",\n               \"duplicate\",\n               \"download-qrcode\",\n               \"send-notification\",\n               \"read-attendee\",\n               \"create-attendee\",\n               \"update-attendee\",\n               \"delete-attendee\"\n           ],\n           \"url\": \"admin/event\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 11,\n           \"sequence_order\": 13\n       },\n       {\n           \"id\": 15,\n           \"name\": \"News Categories\",\n           \"code\": \"news-category\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/news_category\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 14,\n           \"sequence_order\": 15\n       },\n       {\n           \"id\": 16,\n           \"name\": \"News\",\n           \"code\": \"news\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\",\n               \"set-feature\",\n               \"send-notification\"\n           ],\n           \"url\": \"admin/news\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 14,\n           \"sequence_order\": 16\n       },\n       {\n           \"id\": 18,\n           \"name\": \"Chat Groups\",\n           \"code\": \"chat-groups\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/chat_group\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 17,\n           \"sequence_order\": 18\n       },\n       {\n           \"id\": 19,\n           \"name\": \"Chat\",\n           \"code\": \"chat\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\"\n           ],\n           \"url\": \"admin/chat\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 17,\n           \"sequence_order\": 19\n       },\n       {\n           \"id\": 22,\n           \"name\": \"FAQ Categories\",\n           \"code\": \"faq-category\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/faq_category\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 21,\n           \"sequence_order\": 22\n       },\n       {\n           \"id\": 23,\n           \"name\": \"FAQs\",\n           \"code\": \"faq\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/faq\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 21,\n           \"sequence_order\": 23\n       },\n       {\n           \"id\": 25,\n           \"name\": \"About Us\",\n           \"code\": \"about-us\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"update\"\n           ],\n           \"url\": \"admin/public_content/about_us\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 24,\n           \"sequence_order\": 25\n       },\n       {\n           \"id\": 26,\n           \"name\": \"Term of Usage\",\n           \"code\": \"term-of-usage\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"update\"\n           ],\n           \"url\": \"admin/public_content/term_of_usage\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 24,\n           \"sequence_order\": 26\n       },\n       {\n           \"id\": 27,\n           \"name\": \"Setting\",\n           \"code\": \"setting\",\n           \"icon\": \"fa fa-cogs\",\n           \"actions\": [\n               \"read\",\n               \"update\"\n           ],\n           \"url\": \"admin/setting\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 20,\n           \"sequence_order\": 27\n       },\n       {\n           \"id\": 29,\n           \"name\": \"Roles\",\n           \"code\": \"role\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/role\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 28,\n           \"sequence_order\": 29\n       },\n       {\n           \"id\": 30,\n           \"name\": \"Users\",\n           \"code\": \"user\",\n           \"icon\": null,\n           \"actions\": [\n               \"read\",\n               \"create\",\n               \"update\",\n               \"delete\",\n               \"publish\"\n           ],\n           \"url\": \"admin/role\",\n           \"is_menu\": 1,\n           \"is_label\": 0,\n           \"is_wrapper\": 0,\n           \"permission_id\": 28,\n           \"sequence_order\": 30\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/list/permissions"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/role/list/all",
    "title": "2. List All Role",
    "version": "1.0.0",
    "name": "List_All_Role",
    "group": "Role",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": [\n       {\n           \"id\": 1,\n           \"name\": \"Admin\"\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Editor\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/list/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/role/list",
    "title": "1. List Role",
    "version": "1.0.0",
    "name": "List_Role",
    "group": "Role",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"list\": [\n           {\n               \"id\": 2,\n               \"name\": \"Editor\",\n               \"description\": \"Manage Project\",\n               \"is_enable\": true,\n               \"created_by\": 1,\n               \"updated_by\": 1,\n               \"created_at\": \"2020-02-11 06:21:12\",\n               \"updated_at\": \"2020-02-11 06:24:39\",\n               \"users_count\": 1\n           }\n       ],\n       \"total\": 2\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/list"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/role/show/:role_id",
    "title": "3. Show Role",
    "version": "1.0.0",
    "name": "Show_Role",
    "group": "Role",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"id\": 2,\n       \"name\": \"Editor\",\n       \"description\": \"Manage Project\",\n       \"is_enable\": true,\n       \"created_by\": 1,\n       \"updated_by\": 1,\n       \"created_at\": \"2020-02-11 09:28:58\",\n       \"updated_at\": \"2020-02-11 15:50:30\",\n       \"role_permissions\": [\n           {\n               \"permission_id\": 1,\n               \"actions\": [\n                   \"read\"\n               ]\n           },\n           {\n               \"permission_id\": 3,\n               \"actions\": [\n                   \"read\",\n                   \"clear-session\"\n               ]\n           },\n           {\n               \"permission_id\": 5,\n               \"actions\": [\n                   \"read\",\n                   \"create\",\n                   \"update\",\n                   \"publish\",\n                   \"delete\"\n               ]\n           },\n           {\n               \"permission_id\": 6,\n               \"actions\": [\n                   \"read\",\n                   \"create\",\n                   \"update\",\n                   \"delete\",\n                   \"publish\",\n                   \"set-feature\",\n                   \"send-notification\"\n               ]\n           },\n           {\n               \"permission_id\": 7,\n               \"actions\": [\n                   \"read\"\n               ]\n           },\n           {\n               \"permission_id\": 9,\n               \"actions\": [\n                   \"read\",\n                   \"create\",\n                   \"update\",\n                   \"delete\"\n               ]\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/show/:role_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/role/update/:role_id",
    "title": "5. Update Role",
    "version": "1.0.0",
    "name": "Update_Role",
    "group": "Role",
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"name\" : \"Editor\",\n\t\"description\" : \"Manage Project\",\n\t\"is_enable\" : true,\n\t\"permissions\" : [\n\t\t{\n\t\t\t\"permission_id\" : 1,\n\t\t\t\"actions\": \"read\"\n\t\t},{\n\t\t\t\"permission_id\" : 3,\n\t\t\t\"actions\" : \"read\"\n\t\t}\n\t]\n }",
        "type": "curl"
      }
    ],
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/update/:role_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/role/status/{id}",
    "title": "6. Update Role Status",
    "version": "1.0.0",
    "name": "Update_Role_Status",
    "group": "Role",
    "filename": "./Role.js",
    "groupTitle": "Role",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/role/status/{id}"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/",
    "title": "1. Socket Event",
    "version": "1.0.0",
    "name": "Socket_Event",
    "group": "Socket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chat:user:action",
            "description": "<p>Event get user action</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chat:messages",
            "description": "<p>Event get message from socket</p>"
          }
        ]
      }
    },
    "filename": "./Socket.js",
    "groupTitle": "Socket",
    "sampleRequest": [
      {
        "url": "/"
      }
    ]
  },
  {
    "type": "",
    "url": "/",
    "title": "Status Code",
    "version": "1.0.0",
    "name": "StatusCode",
    "group": "Status_Code",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Authorization/Auth token is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>No access rights to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Resource is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Server Error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Error Authorization & Authentication Request\n{\n   \"success\": false,\n   \"message\": \"The authorized is required. The authorized is invalid\"\n}\n\nHTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"Wrong details.\"\n}\n\nHTTP/1.1 412 Error Validation Request\n{\n   \"success\": false,\n   \"message\": {\n       \"name\": [\n           \"The name field is required.\"\n       ],\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Authentication.js",
    "groupTitle": "Status_Code",
    "sampleRequest": [
      {
        "url": "/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/admin/user/create",
    "title": "4. Create User",
    "version": "1.0.0",
    "name": "Create_User",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"first_name\" : \"Sophanith\",\n\t\"last_name\" : \"Chhoun\",\n\t\"gender\" : \"male\",\n\t\"phone_number\" : \"086457447\",\n\t\"user_name\" : \"sophanith\",\n\t\"email\" : \"sophanith.chhoun@codingate.com\",\n\t\"password\" : \"123\",\n\t\"address\" : \"Phnom Penh\",\n\t\"roles\" : [1, 2],\n\t\"is_resource\": false,\n\t\"is_enable\": true,\n\t\"manager_id\": null,\n\t\"user_type_id\": null\n }",
        "type": "curl"
      }
    ],
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/user/delete/:user_id",
    "title": "7. Delete User",
    "version": "1.0.0",
    "name": "Delete_User",
    "group": "User",
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/delete/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/user/list/all",
    "title": "2. List All User",
    "version": "1.0.0",
    "name": "List_All_User",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": [\n       {\n           \"id\": 1,\n           \"first_name\": \"Codingate\",\n           \"last_name\": \"Technology\",\n           \"user_name\": \"Admin\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/list/all"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/user/list",
    "title": "1. List User",
    "version": "1.0.0",
    "name": "List_User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Locale",
            "description": "<p>Prefer Language(en || km). Fallback Language is &quot;en&quot;.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>application/json =&gt; return response as JSON</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"list\": [\n           {\n               \"id\": 2,\n               \"user_type_id\": null,\n               \"manager_id\": null,\n               \"first_name\": \"Sophanith\",\n               \"last_name\": \"Chhoun\",\n               \"user_name\": \"sophanith\",\n               \"email\": \"sophanith.chhoun@codingate.com\",\n               \"gender\": \"male\",\n               \"phone_number\": \"086457447\",\n               \"address\": \"Phnom Penh\",\n               \"is_enable\": true,\n               \"is_resource\": false,\n               \"created_by\": 1,\n               \"updated_by\": null,\n               \"created_at\": \"2020-04-15 09:08:52\",\n               \"updated_at\": \"2020-04-15 09:08:52\",\n               \"media\": null,\n               \"roles\": [\n                   {\n                       \"id\": 1,\n                       \"name\": \"Super Admin\"\n                   }\n               ]\n           }\n       ],\n       \"total\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/list"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>Key search resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit of list resource</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort of list resource. eg. sort=asc|desc</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order",
            "description": "<p>Ordering field to sort. eg. order=updated_at</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/admin/user/show/:user_id",
    "title": "3. Show User",
    "version": "1.0.0",
    "name": "Show_User",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": {\n       \"id\": 2,\n       \"user_type_id\": null,\n       \"manager_id\": null,\n       \"first_name\": \"Sophanith\",\n       \"last_name\": \"Chhoun\",\n       \"user_name\": \"sophanith\",\n       \"email\": \"sophanith.chhoun@codingate.com\",\n       \"gender\": \"male\",\n       \"phone_number\": \"086457447\",\n       \"address\": \"Phnom Penh\",\n       \"is_enable\": false,\n       \"is_resource\": false,\n       \"created_by\": 1,\n       \"updated_by\": 1,\n       \"created_at\": \"2020-04-15 09:08:52\",\n       \"updated_at\": \"2020-04-15 09:10:08\",\n       \"media\": null,\n       \"roles\": [\n           {\n               \"id\": 1,\n               \"name\": \"Super Admin\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/show/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/user/update/:user_id",
    "title": "5. Update User",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": " {\n\t\"first_name\" : \"Sophanith\",\n\t\"last_name\" : \"Chhoun\",\n\t\"gender\" : \"male\",\n\t\"phone_number\" : \"086457447\",\n\t\"user_name\" : \"sophanith\",\n\t\"email\" : \"sophanith.chhoun@codingate.com\",\n\t\"password\" : \"1234\",\n\t\"address\" : \"Phnom Penh\",\n\t\"roles\" : [1, 2],\n\t\"is_resource\": false,\n\t\"is_enable\": true,\n\t\"manager_id\": null,\n\t\"user_type_id\": null\n }",
        "type": "curl"
      }
    ],
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/update/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/admin/user/status/:user_id",
    "title": "6. Update User Status",
    "version": "1.0.0",
    "name": "Update_User_Status",
    "group": "User",
    "filename": "./User.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8000//api/admin/user/status/:user_id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorize token for requesting API.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Auth",
            "description": "<p>Access token from user login.</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><code>application/x-www-form-urlencoded</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Accept",
            "description": "<p><code>application/json</code></p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Locale",
            "defaultValue": "en",
            "description": "<p>locale language for response. <code>en</code> || <code>km</code> || <code>cn</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_enable",
            "description": "<p>publish/active status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 200 Success Request\n{\n   \"success\": true,\n   \"data\": \"message\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthorizationInvalid",
            "description": "<p>authorization token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "401",
            "optional": false,
            "field": "AuthInvalid",
            "description": "<p>auth token is missing, expire, or invalid.</p>"
          },
          {
            "group": "4xx",
            "type": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>resource is not found</p>"
          },
          {
            "group": "4xx",
            "type": "412",
            "optional": false,
            "field": "ErrorValidation",
            "description": "<p>validation of required, format, min, max, ....</p>"
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "type": "500",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401 (AuthorizationInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"The authorization is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "401 (AuthInvalid):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": \"user is unauthorized. The token is invalid.\"\n}",
          "type": "json"
        },
        {
          "title": "404 (NotFound):",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": false,\n   \"message\": \"The :attribute is not found.\"\n}",
          "type": "json"
        },
        {
          "title": "412 (ErrorValidation):",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"success\": false,\n   \"message\": {\n       \"field\": [\n           \"validation message\"\n       ]\n   }\n}",
          "type": "json"
        },
        {
          "title": "500 (InternalSeverError):",
          "content": "HTTP/1.1 500 Error In Server Request\n{\n   \"success\": false,\n   \"message\": \"Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
