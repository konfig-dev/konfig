#!/bin/bash

# Ensure "RENDER" environment variable is set
if [ -z "$RENDER" ]; then
  echo "RENDER environment variable is not set"
  exit 1
fi

rm -rf ../../sdks;
rm -rf ../../customers;
rm -rf ../konfig-docs;
rm -rf ../konfig-integration-tests;
yarn --ignore-engines;
yarn build;
du -hs ../../*;
du -hs ../*;
du -hs *;
du -hs ~/project;
du -hs -c ~/project/*;
du -hs ~/project/src/*;
du -hs -c ~/project/src/generator/*;
du -hs -c ~/project/src/generator/konfig-next-app/*;
readlink -f ~/project
