# Use the official Swift image.
FROM swift:latest

# Set the working directory.
WORKDIR /app

# Copy your Swift project into the Docker image.
COPY . .

# Resolve Swift package dependencies.
RUN swift package resolve

# Compile the project.
RUN swift build

# Command to run tests.
CMD ["swift", "test"]