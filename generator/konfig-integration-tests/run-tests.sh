#!/bin/bash

# You can use this script to run integration tests in earthly locally.

# You can optionally pass in command line arguments to this script, which will be appended to the base command.
# For example `./run-tests.sh --TEST_ARGS="--shard=1/2"` will run the tests with the `--shard=1/2` flag.

# Store the base command in a variable
base_cmd="earthly --config earthly-config.yaml --secret AWS_ACCESS_KEY_ID --secret AWS_SECRET_ACCESS_KEY --secret NPM_TOKEN='dummy' --secret GITHUB_ACTIONS=false -P +test"

# Append command line arguments
for arg in "$@"; do
  base_cmd="$base_cmd $arg"
done

# Execute the command
eval $base_cmd