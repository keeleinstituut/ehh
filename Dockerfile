FROM node:22-alpine AS build
WORKDIR /app

ARG ENVIRONMENT=dev

COPY package.json package-lock.json ./
ENV CYPRESS_INSTALL_BINARY=0
RUN npm ci

COPY . .
RUN npm run build -- --configuration=${ENVIRONMENT}

FROM nginxinc/nginx-unprivileged:1.29-alpine AS runtime
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/pronunciation-exercises /usr/share/nginx/html

EXPOSE 8080
