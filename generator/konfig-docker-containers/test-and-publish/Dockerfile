### TYPESCRIPT
FROM node:18

### PYTHON
RUN apt-get update && apt-get install -y python3
RUN apt install -y python3-poetry
# Needed for publishing to pypi
RUN apt install python3.11-venv
# Clean up python installations
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Use bash as default shell
SHELL ["/bin/bash", "-c"]