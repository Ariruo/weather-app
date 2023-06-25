# Weatherapp

to run this app locally you need to use npm i && npm start in both of the services. you also need to use your own  openweathermap API key which you can find here https://openweathermap.org/. 

to run the app in docker enviorment. all you need to do is go to root folder and use the docker-compose up

i have saved you the trouble to get this amazing app runnin on aws cloud. Here is the documentation for it

AWS Documentation: Dockerizing and Deploying Weather Application on ECS
1. Dockerization
I dockerized a this weatherapp, separating the frontend and backend components into their own Docker images.

2. Pushing Images to ECR (Elastic Container Registry)
I pushed the Docker images to ECR for storing and managing the container images.

3. Creating ECS Cluster
I created a new ECS (Elastic Container Service) cluster to host the application.

4. Creating Fargate Services
I created two Fargate services to separate the frontend and backend components.

5. Creating Task Definitions
I created task definitions for both the frontend and backend components.

6. Network Configuration
I ensured that both the frontend and backend tasks are running on the same VPC.

7. Application Load Balancer (ALB)
I created an Application Load Balancer to distribute traffic between the frontend and backend components. and that they have solid dns host.

