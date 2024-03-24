# User Api Spec

## Register

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "john",
  "passsword": "secret",
  "name": "John"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "john",
    "name": "John"
  },
  "success": true
}
```

Response Body (Failed):

```json
{
  "errors": {
    "username": "Already registered"
  },
  "success": false
}
```

## Login

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "john",
  "passsword": "secret"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "john",
    "name": "John",
    "token": "123"
  },
  "success": true
}
```

Response Body (Failed):

```json
{
  "errors": {
    "username": "wrong username or password"
  },
  "success": false
}
```

## Get User

Endpoint : GET /api/users/current

Headers:

- auth : token
  Request Body :

```json
{
  "username": "john",
  "name": "John"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "john",
    "name": "John"
  },
  "success": true
}
```

Response Body (Failed):

```json
{
  "errors": {
    "username": "Unauthorized"
  },
  "success": false
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers:

- auth : token
  Request Body :

```json
{
  "password": "john",
  "name": "John"
}
```

Response Body (Success):

```json
{
  "data": {
    "password": "john",
    "name": "John"
  },
  "success": true
}
```

Response Body (Failed):

```json
{
  "errors": {
    "username": "Unauthorized"
  },
  "success": false
}
```

## Logout

Endpoint : DELETE /api/users/current

Headers:

- auth : token
  Request Body :

Response Body (Success):

```json
{
  "data": "Logout success",
  "success": true
}
```

Response Body (Failed):

```json
{
  "errors": {
    "username": "Unauthorized"
  },
  "success": false
}
```
