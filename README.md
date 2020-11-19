# GraphQL Bytes

Complimentary Git repo to the [GraphQL Morning Bytes Presentation](https://docs.google.com/presentation/d/1_VTc7WyE10Qe7ypQcuv5nw7u2zJJwvTmpSom6SHto2g/edit?usp=sharing)

## Quickstart

The commands below will start a live server on `localhost:4000` listening on `/graphql`.

```
npm i
npm run dev
```

## Scripts

| Script  | Description                                               |
| ------- | --------------------------------------------------------- |
| `start` | Starts the node server (requires a build first)           |
| `build` | Compiles the Javascript code to `dist/`                   |
| `dev`   | development only script for live recompilation of sources |
| `clean` | Cleans out all artifacts to start at a fresh repository   |
| `test`  | Runs the tests                                            |


## Examples

See the [GraphQL Bytes Postman Collection](https://www.getpostman.com/collections/cf563aa6f2b453304da0).

## Testing

There are two levels of tests being demonstrated in this repository: unit tests for services and integration
tests for the Apollo Server. Both are run by executing `npm test`. Note that there is only one service being
tested in the repo here (the `author.service`). This is not an oversight; it's done to demonstrate _how_ we'd implement unit tests to test services without being exhaustive to save time.
