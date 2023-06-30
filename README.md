# Weatherapp

### To run this app locally with Node.js, follow these steps:

1. Obtain an API key: You need to use your own OpenWeatherMap API key, which you can find here [OpenWeatherMap](https://openweathermap.org/)
2. set up the API key: Reference the api key in the ./backend/index.js 
3. Install dependencies: Run ***npm i && npm start*** in both of the services (backend & frontend), and the app should start running in the port:3000


   
### If you prefer to run the app via Docker, make sure you have Docker installed and follow these additional steps:

1. Set up the API key: In the Dockerfile located in the ./backend folder, set your API key as an environment variable called ***APPID***.
2. Start the app: Go to the root folder and run ***docker-compose up*** command. This will build images and start the Docker containers, and the app should start running in the **port:3000**.






### Here's how i deployed this app on the AWS cloud

1. Dockerization
I first dockerized the app, separating the frontend and backend components into their own Docker images.

2. Pushing Images to ECR (Elastic Container Registry)
I pushed the Docker images to ECR for storing and managing the container images.

3. Creating ECS Cluster
I created a new ECS (Elastic Container Service) cluster to host the application.

4. Creating Fargate Services
I created two Fargate services to separate the frontend and backend components.

5. Creating Task Definitions
I created task definitions for both the frontend and backend components.

6. Network Configuration
I ensured that both the frontend and backend tasks are running on the same VPC. I also opened all necessary ports in security group

7. Application Load Balancer (ALB)
I created an Application Load Balancer to distribute traffic between the frontend and backend components. and that they have solid DNS host.



