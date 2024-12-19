FROM node:20-alpine

WORKDIR /

COPY package*.json .

# Install app dependencies
RUN npm install

# Copy the entire source code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
