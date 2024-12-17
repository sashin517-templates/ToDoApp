# Use the official Node.js image as the base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire source code
COPY . .

# Build the React app
RUN npm run build

# Install a simple static server to serve the React build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the built React app
CMD ["serve", "-s", "build", "-l", "3000"]
