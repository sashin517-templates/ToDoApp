# Use a lightweight Node.js image as the base image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application using the full path to vite
RUN npx vite build

# Use a lightweight web server to serve the production build
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
