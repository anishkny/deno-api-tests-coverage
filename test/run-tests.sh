#!/usr/bin/env bash
set -euxo pipefail

# Change into the directory of this script
cd "$(dirname "$0")"
rm -rf coverage

# Install dependencies
npm install

# Run tests
deno test --allow-net --allow-run --coverage=coverage ./server_test.ts

# Generate coverage reports
deno coverage coverage/
