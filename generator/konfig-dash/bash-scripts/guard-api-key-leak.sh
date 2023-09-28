#!/bin/bash

# get the api keys from api-keys.ts
keyFile="../api/src/lib/api-keys.ts"
apiKeys=($(grep -oE '[A-Za-z0-9]{32}:' "$keyFile" | sed 's/://'))

searchFolder="../packages"
foundKey=false

for apiKey in "${apiKeys[@]}"; do
  files=$(grep -rl "$apiKey" "$searchFolder")
  if [ -n "$files" ]; then
    foundKey=true
    echo "ERROR: Security risk detected. API key leaked in the following file(s):"
    echo "$files"
    echo
  fi
done

if "$foundKey"; then
  exit 1
fi
echo No api key leaks detected.
exit 0
