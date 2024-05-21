# Use an official Node runtime based on Alpine as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm ci

# Bundle app source
COPY . . 
RUN npm run build

#Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "run", "serve"]