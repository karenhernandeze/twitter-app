# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable
ENV NODE_ENV=production

# Expose the port that the app will run on
EXPOSE 3001

# Start the React app
CMD ["npm", "start"]
