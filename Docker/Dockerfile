# Dockerfile for Node.js Backend

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package.json ./

# Install any needed dependencies specified in package.json
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Expose port 3000 for the backend to be accessible
EXPOSE 3000

# Run the application
CMD ["npm", "start"]

