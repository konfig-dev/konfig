### TYPESCRIPT
FROM node:18

### PYTHON
# Install python3
RUN apt-get update && apt-get install -y python3
# Install poetry
RUN apt install -y python3-poetry
# Clean up python installations
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
