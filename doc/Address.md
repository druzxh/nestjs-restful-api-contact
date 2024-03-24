# Address API Spec

## Create Address

Endpoint : POST /api/:contact_id/addresses

Headers:

- auth: token

Request Body:

```json
{
  "street": "Jl. Contoh",
  "city": "Bandung",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": 12345
}
```

Response Body (Success):

```json
{
  "data": {
    "address_id": "1234",
    "street": "Jl. Contoh",
    "city": "Bandung",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": 12345
  },
  "success": true
}
```

## Get Address

Endpoint : GET /api/address/:address_id

Headers:

- auth: token

Response Body (Success):

```json
{
  "data": {
    "address_id": "1234",
    "street": "Jl. Contoh",
    "city": "Bandung",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": 12345
  },
  "success": true
}
```

## Update Address

Endpoint : PUT /api/address/:address_id

Headers:

- auth: token

Request Body:

```json
{
  "street": "Jl. Contoh",
  "city": "Bandung",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": 12345
}
```

Response Body (Success):

```json
{
  "data": {
    "address_id": "1234",
    "street": "Jl. Contoh",
    "city": "Bandung",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": 12345
  },
  "success": true
}
```

## Remove Address

Endpoint : DELETE /api/addresses/:address_id

Headers:

- auth: token

Response Body (Success):

```json
{
  "data": "Delete success",
  "success": true
}
```

## List Addresses

Endpoint : GET /api/addresses

Headers:

- auth: token

Response Body (Success):

```json
{
  "data": [
    {
      "address_id": "1234",
      "street": "Jl. Contoh",
      "city": "Bandung",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": 12345
    }
  ],
  "success": true
}
```
