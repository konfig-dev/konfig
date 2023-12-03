#!/bin/bash

# Run vitest and save its exit code
vitest "$@"  # Pass all arguments to vitest
vitest_exit_code=$?

echo "Unzipping html.meta.json.gz..."
gunzip -c html/html.meta.json.gz > html/html.meta.json

# Path to the index.html file
index_html="html/index.html"

echo "Replacing 'html.meta.json.gz' with 'html.meta.json' in $index_html..."
# Using sed to replace 'html.meta.json.gz' with 'html.meta.json'
# Check the operating system
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS requires an empty string with the -i option
    sed -i '' 's/html.meta.json.gz/html.meta.json/' "$index_html"
else
    # Linux does not require the empty string
    sed -i 's/html.meta.json.gz/html.meta.json/' "$index_html"
fi

DATE_VAR=$(date +"%Y-%m-%d_%H-%M-%S")

# Sync the html reports to S3
echo "Syncing the html reports to S3..."
aws s3 sync html/ s3://konfig-integration-test-reports/$DATE_VAR/

# Echoing the URL in a box
echo "Navigate to the following URL to view the test results:"
# Constructing the URL
URL="https://konfig-integration-test-reports.s3.us-west-1.amazonaws.com/$DATE_VAR/index.html#/"

# Calculate the length of the URL for the box size
len=$((${#URL} + 2))  # Adding 2 for the spaces around the URL
border=$(printf '%*s' "$len" | tr ' ' '-')

# Echoing the URL in a dynamically sized box
echo "+$border+"
echo "| $URL |"
echo "+$border+"
echo "::set-output name=test-report::$URL" # Set the URL as an output variable

# Exit with the exit code of vitest
exit $vitest_exit_code