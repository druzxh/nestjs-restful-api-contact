# Contact API Spec

## Create Contact

Endpoint : POST /api/contact

Headers:

- auth: token

Request Body:

```json
{
  "first_name": "John",
  "last_name": "John Doe",
  "email": "john@email.com",
  "phone": 0898989
}
```

Response Body (Success):

```json
{
  "data": {
    "id": "1",
    "first_name": "John",
    "last_name": "John Doe",
    "email": "john@email.com",
    "phone": 0898989
  },
  "success": true
}
```

## Get Contact

Endpoint : GET /api/contact/:contact_id

Headers:

- auth: token

Response Body (Success):

```json
{
  "data": {
    "id": "1",
    "first_name": "John",
    "last_name": "John Doe",
    "email": "john@email.com",
    "phone": 0898989
  },
  "success": true
}
```

## Update Contact

Endpoint : PUT /api/contact/contact_id

Headers:

- auth: token

Request Body:

```json
{
  "first_name": "John",
  "last_name": "John Doe",
  "email": "john@email.com",
  "phone": 0898989
}
```

Response Body (Success):

```json
{
  "data": {
    "id": "1",
    "first_name": "John",
    "last_name": "John Doe",
    "email": "john@email.com",
    "phone": 0898989
  },
  "success": true
}
```

## Remove Contact

Endpoint : DELETE /api/contact

Headers:

- auth: token

Response Body (Success):

```json
{
  "data": "Delete success",
  "success": true
}
```

## Search Contact

Endpoint : GET /api/contacts

Headers:

- auth: token

Query Params:

- name: string
- phone: string
- email: string
- page: number, default 1
- size: number, default 10

Response Body (Success):

```json
{
  "data": [
    "id": "1",
    "first_name": "John",
    "last_name": "John Doe",
    "email": "john@email.com",
    "phone": 0898989
  ],
  "paging": {
      "page": 1,
      "total_page": 10,
      "size": 10
  },
  "success": true
}
```
