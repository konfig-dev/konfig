#!/bin/bash

vitest "$@"  # Pass all arguments to vitest
npx vite preview --outDir html --open  # Then run vite preview