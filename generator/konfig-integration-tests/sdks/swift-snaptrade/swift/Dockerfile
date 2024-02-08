# Use the official Swift image.
FROM node:18-bullseye

# Set the working directory.
WORKDIR /app

RUN curl -s https://archive.swiftlang.xyz/install.sh | bash
RUN apt install -y swiftlang
RUN swift --version

# Copy your Swift project into the Docker image.
COPY . .

# Resolve Swift package dependencies.
RUN swift package resolve

# Compile the project.
RUN swift build

# Command to run tests.
CMD ["swift", "test"]