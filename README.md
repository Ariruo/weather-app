# Weatherapp

### To run this app locally with Node.js, follow these steps:

1. Install dependencies: Run npm i && npm start in both of the services (backend & frontend).
2. Obtain an API key: You need to use your own OpenWeatherMap API key, which you can find here https://openweathermap.org/
3. put the api key in the .backend/index.js 
   
### If you prefer to run the app via Docker, make sure you have Docker installed and follow these additional steps:

1.Set up the API key: In the Dockerfile located in the ./backend folder, set your API key as an environment variable called APPID.

2.Start the app: Go to the root folder and run docker-compose up command. This will build images and start the Docker containers, and the app should start running.

in both of the scenarios the app should be runnin in "localhost:3000" 


### i have saved you the trouble to get this amazing app runnin on aws cloud. Here is the documentation for it

### AWS Documentation: Dockerizing and Deploying this application on ECS

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
I created an Application Load Balancer to distribute traffic between the frontend and backend components. and that they have solid dns host.

the app link: http://fronttibalancer-964227170.us-east-1.elb.amazonaws.com/?fbclid=IwAR2FeNnN5OfeMHP65PtxQycRarR7W75NWS4MpO90yVtRx9t76X4a9rH9WT8

