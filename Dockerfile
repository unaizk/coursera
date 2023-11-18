# Command to configure the base image (official Node.js base image)
FROM node:alpine

# Set the working directory for the container
WORKDIR /app

# Copy the frontend and backend folders to the /app directory
COPY frontend /app/frontend
COPY backend /app/backend

# Copy the package files to the working directory of the container
COPY package*.json ./


# Copy the frontend package.json into the frontend folder
COPY frontend/src /app/frontend/
COPY frontend/package*.json /app/frontend/
COPY frontend/*.js /app/frontend/
COPY frontend/*.cjs /app/frontend/
COPY frontend/*.html /app/frontend/
COPY frontend/*.gitignore /app/frontend/
COPY frontend/*.md /app/frontend/

# Install dependencies in the root directory
RUN npm install 

# Install dependencies in the frontend directory
RUN cd /app/frontend && npm install

# Specify the default command to run the application inside the container for run both fontend and backend
CMD ["npm", "run", "dev"]
