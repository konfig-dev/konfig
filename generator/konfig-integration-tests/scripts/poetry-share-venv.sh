#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Illegal number of parameters"
    exit 1
fi

cd $1
pyproject_toml=$(find . -name pyproject.toml)
if [ -z $pyproject_toml ]; then
    echo "No pyproject.toml found"
    exit 0
fi

slash_count_1=$(echo "$1" | awk -F "konfig-integration-tests/sdks/" '{print $2}' | awk -F/ '{print NF-1}')
slash_count_2=$(echo $pyproject_toml | grep -o "/" | wc -l)
depth=$((slash_count_1 + slash_count_2 + 1))
venv_path=""
for ((i=0; i<$depth; i++)); do
    venv_path="${venv_path}../"
done
venv_path="${venv_path}shared_venv"

echo "" >> $pyproject_toml
echo "[virtualenvs]" >> $pyproject_toml
echo "path = \"$venv_path\"" >> $pyproject_toml