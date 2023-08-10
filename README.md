# Weatherapp

### To run this app locally with Node.js, follow these steps:

1. Obtain an API key: You need to use your own OpenWeatherMap API key, which you can find here [OpenWeatherMap](https://openweathermap.org/)
2. set up the API key: Reference the api key in the ./backend/index.js 
3. Install dependencies: Run ***npm i && npm start*** in both of the services (backend & frontend), and the app should start running in the port:3000


   
### If you prefer to run the app via Docker, make sure you have Docker installed and follow these additional steps:

1. Set up the API key: In the Dockerfile located in the ./backend folder, set your API key as an environment variable called ***APPID***.
2. Start the app: Go to the root folder and run ***docker-compose up*** command. This will build images and start the Docker containers, and the app should start running in the **port:3000**.





