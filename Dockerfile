# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./  # Added a small tweak here (split)

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Expose port 3000 to be accessible outside the container
EXPOSE 5000

# Serve the built React application using a simple static file server
CMD ["npm", "run", "dev"]
