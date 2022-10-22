FROM node:18.11.0-alpine3.15

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN corepack enable pnpm
RUN pnpm i

COPY . .
RUN pnpm build

FROM nginx
COPY --from=0 /app/docs /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
