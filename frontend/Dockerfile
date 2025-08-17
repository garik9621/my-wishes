# Use a Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's caching
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port Vite's dev server runs on (default is 5173 for Vite 3+)
EXPOSE 5173

# Command to start the Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]