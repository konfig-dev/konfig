#!/bin/bash

docker build . -t swift-snaptrade
docker run -p 4082:4082 swift-snaptrade