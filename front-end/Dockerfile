FROM node:18-alpine

WORKDIR /src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 5173

CMD [ "nginx", "-g", "daemon off;"]