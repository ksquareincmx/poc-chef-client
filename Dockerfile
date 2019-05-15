# Stage 1 - the build process
FROM node:latest as build-deps
RUN mkdir -p /usr/poc-chef-client
WORKDIR /usr/poc-chef-client
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/poc-chef-client/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
