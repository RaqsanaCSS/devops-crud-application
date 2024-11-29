FROM node:14

WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install the dependencies according package.json file we copied using COPY before
RUN npm install

COPY . .

EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
