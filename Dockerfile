# Set the base image to Node.js LTS on Alpine
FROM node:lts-alpine AS build

# Create app directory in the image
WORKDIR /usr/src/app

# Copy all the files from the project directory to the app directory
COPY . .

# Install app dependencies
RUN npm ci

# Set the base image to Node.js LTS on Alpine
FROM node:lts-alpine

# Set the NODE_ENV to production
ENV NODE_ENV production

# Create a user so we don't run it as root
USER node

# Create app directory in the image
WORKDIR /usr/src/app

# Copy the node_modules directory from the build stage
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules

# Copy application files from the build stage
COPY --chown=node:node --from=build /usr/src/app .

# Expose the port
EXPOSE 8080

# Command to start the application
CMD ["npm", "run", "dev"]
