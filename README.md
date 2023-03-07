# Sample Dockerized NodeJS App
Dockerized Express JS and MySQL images with Sequelize

## Usage
1. Clone the repo
2. Install node, docker and docker compose on the system.
3. Run ``` nvm use ``` or check the `.nvmrc` file to use the node version provided.
4. Run ``` npm install ``` to install dependencies.
5. Run ``` docker compose up ``` to build the docker image and start the container.
6. Visit `http://localhost:8080` to check if the application is running.

## Endpoints

GET `/nearestTreasure`

Finds the nearest treasure based on the coordinates provided. When prize is provided, returns the nearest treasure with the lowest prize

| Key            | Value                 | Sample Value       |
| -------------- |:---------------------:| ------------------:|
| latitude       | float                 | 14.552036595352455 |
| longitude      | float                 | 121.01696118771324 |
| distance       | number (1 or 10 only) | 1                  |
| prize          | number (10 to 30 only)| 20                 |
