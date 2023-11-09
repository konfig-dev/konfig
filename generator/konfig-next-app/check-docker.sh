#!/bin/bash
if ! docker info > /dev/null 2>&1; then
  echo "Docker daemon is not running. Starting it now..."
  open -a Docker  # This command is for MacOS. Use `systemctl start docker` for most Linux distros, or use the appropriate command for your OS to start Docker.
  while ! docker info > /dev/null 2>&1; do
    echo "Waiting for Docker daemon to start..."
    sleep 1
  done
fi
echo "Docker daemon is running."
