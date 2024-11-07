FROM node:22-alpine AS build
WORKDIR /app
COPY ./ .
RUN npm install
RUN npm run build

FROM nginx:1.26-alpine

COPY --from=build /app/dist/pronunciation-exercises /usr/share/nginx/html
