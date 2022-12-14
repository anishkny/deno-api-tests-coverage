# Deno API Tests Coverage

[![Coverage Status](https://coveralls.io/repos/github/anishkny/deno-api-tests-coverage/badge.svg?branch=main)](https://coveralls.io/github/anishkny/deno-api-tests-coverage?branch=main)

Demonstrates code coverage measurement of a Deno server when running Postman (`newman`) API tests.

See accompanying [blog post](https://dev.to/anishkny/code-coverage-for-a-running-deno-server-35ga) for more details.

## Requirements

Deno v1.26 (or higher) installed and available on path.

## Usage

Clone this repository and execute:

```bash
deno task test
```

This runs the test file [`./test/server_test.ts`](./test/server_test.ts) and collects resulting code coverage.

The test file takes the following steps:

1. Start the Deno server to be tested ([`src/server.ts`](src/server.ts)).
1. Run Postman API tests using `newman` in a subprocess.
1. Stop the server.

## Background

Deno lacks a way to measure code coverage of a server when running API tests. See [this discussion](https://github.com/denoland/deno/discussions/16292) on the Deno repo.

Ideally, there would be a way to start a server thus:

```bash
deno run --coverage=coverage src/server.ts # Doesn't work
# Run API tests
# Kill server
```

Instead you have to start the server, run API tests by shelling out to a process and then stop the server, in the test itself.

```bash
deno test --coverage=coverage test/server_test.ts ... # Workaround
```

This repo demonstrates how to do that. See [test/run-tests.sh](test/run-tests.sh) which runs [test/server_test.ts](test/server_test.ts).

Also, see accompanying [blog post](https://dev.to/anishkny) for more details.

## License

[MIT](https://choosealicense.com/licenses/mit/)
