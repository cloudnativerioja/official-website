FROM --platform=linux/amd64 node:lts-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Build static assets
RUN npm run export

FROM --platform=linux/amd64 nginx:alpine

# Copy static assets from builder stage
COPY --from=builder /app/out/ /usr/share/nginx/html

EXPOSE 80


