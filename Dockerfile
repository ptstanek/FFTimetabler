FROM node:20-alpine AS builder

WORKDIR /app

COPY ./src ./src/
COPY package.json .postcssrc ./

RUN npm i
RUN npx parcel build src/index.html

FROM httpd:alpine AS runner

COPY --from=builder /app/dist /usr/local/apache2/htdocs
