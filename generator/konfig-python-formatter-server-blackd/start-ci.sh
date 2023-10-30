#!/bin/bash

cd "$(dirname "$0")"

./venv/bin/poetry run uvicorn main:app --host 0.0.0.0 --port 10000 &
./venv/bin/poetry run blackd --bind-host 0.0.0.0 --bind-port 9090