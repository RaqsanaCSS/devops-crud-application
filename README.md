# CRUD application for DevOps

This project is a simple Node.js application using the MVC architectural pattern. It demonstrates creating and reading.

Prerequisites

    Node.js
    npm (usually comes with Node.js)
    Docker
    Git (for version control)

## Development Environment Setup
To set up the development environment for this project, follow these steps:
1. Clone repository

    ```
    git clone https://github.com/RaqsanaCSS/devops-crud-application.git
    cd nodejs-mvc-project
    ```
2. Install the dependencies:
    ```
    npm install
    ```
3. Start the application in development mode:
    ```
    npm run start
    ```

## Building the Docker Image

The image required is node:14 from dockerhub. (FROM node:14)

I copy package.json and package-lock-json into workdir which is set in the previous step. 

Then I install all required libraries using npm install command.

To build the Docker image for this project, run the following command:
```
docker build -t my-node-app .
```

## Running the Application Locally

To run your application locally using Docker, execute the following command:

```
docker run -p 3000:3000 my-node-app
```

To run your application locally using npm, execute the following command:
```
npm run start
```

## Accessing the Application after deployment

During deployment step I configured simple ubuntu server on [digital ocean](https://www.digitalocean.com/)

During build stage in CI/CD pipeline I create archieve of the docker image to use on deployment stage.

I added 3 variables to CI/CD pipeline SSH_KEY (id_rsa file) DEPLOY_USER AND DEPLOY_HOST. 

Firstly, using ssh key in scp I copied docker image archieve to my deployment host. 

Then I update apt and install docker.io. The reason I use -y is for not breaking deployment stage because prompt when run jobs can break the stage, that is why I use -o StrictHostKeyChecking=no ssh option to prevent add key to local machine prompt.

Then if my-node-app is running I stop and remove it after loading docker image from tar.gz archieve.

At the end I run image and expose port 3000 to port 80 using this command:
```
docker run -d --name my-node-app -p 80:3000 my-node-ap
```

## Access the deployed application

[MY SUPER ORGANIZED APPLICATION](http://165.227.199.191/)
