#!/usr/bin/env bash

openapi-generator-cli generate -c config.yaml -g spring -i api.yaml -o ../../../generator/konfig-generator-api --global-property models