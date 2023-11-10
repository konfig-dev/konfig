#!/bin/bash

earthly --sat med-boy --org konfig-publisher --secret NPM_TOKEN=dummy --secret GITHUB_ACTIONS=true -P +test