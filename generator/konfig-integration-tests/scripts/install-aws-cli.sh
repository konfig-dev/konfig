#!/bin/bash

# Detect the architecture and download the appropriate version of AWS CLI
ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
  curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip"
else
  echo "Unsupported architecture: $ARCH"
  exit 1
fi

# Unzip and install AWS CLI
unzip awscliv2.zip
./aws/install

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY