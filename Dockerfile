FROM node:20-slim as base
WORKDIR /app
ENV NODE_ENV="production"
RUN npm install -g pnpm

FROM base as build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3
COPY --link package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false
COPY --link . .
RUN pnpm run build
RUN pnpm prune --prod

FROM base
COPY --from=build /app /app
EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
