## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## ENV
```bash
# for google translate api
# ------ More information ------
# https://cloud.google.com/docs/authentication/application-default-credentials#GAC
# https://cloud.google.com/docs/authentication/provide-credentials-adc#on-prem
GOOGLE_APPLICATION_CREDENTIALS="json_file_path"

# Token for guard api.
AUTH_TOKEN="1234"
```

## API

<summary><code>POST /translater/translate</code></summary>

##### Header

> | name      |  type     | data type               | description                                             |
> |-----------|-----------|-------------------------|---------------------------------------------------------|
> | auth-token      |  required | string   | For authen |

##### Body

> | name      |  type     | data type               | description                                             |
> |-----------|-----------|-------------------------|---------------------------------------------------------|
> | text      |  required | string   | Now support only Thai languege|
> | target    |  required | en, fr   | Language target to translate, Now support only en or fr|

##### Responses

> | http code     | content-type                      | response                                             |
> |---------------|-----------------------------------|------------------------------------------------------|
> | `200`         | `application/json`                | `{"text":"สวัสดี", "target":"en", "translate: "hello"}`|
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`             |
