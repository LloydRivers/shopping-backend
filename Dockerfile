# Set the base image to Node
FROM node:latest AS build
# Install dumb-init
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
# Create app directory in the image
WORKDIR /usr/src/app
# Copy all the files from the project directory to the app directory
COPY . .
# Install app dependencies
RUN npm ci 

# Set the base image to Node
FROM node:19-bullseye
# Set the NODE_ENV to production (important for production/performance)
ENV NODE_ENV production
# Copy from the previous step
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
# Create a user so we don't run it as root
USER node
# Create app directory in the image
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
EXPOSE 8080
CMD ["dumb-init", "npm", "run", "dev"]
