# Strapi Backend
This repository contains the backend for your application built with Strapi. It provides a GraphQL API for managing stores




### `Installation`
Clone the repository:

    git clone <https://github.com/sagiv1996/crop-store-backend>

Navigate to the project directory:

    cd strapi-backend

Install the dependencies:

    yarn

- Create a .env file in the root directory of the project.
- Add the following environment variables to the .env file:
    - HOST=<your-host>
    - PORT=<your-port>
    - APP_KEYS=<your-app-keys>
    - API_TOKEN_SALT=<your-api-token-salt>
    - ADMIN_JWT_SECRET=<your-admin-jwt-secret>
    - TRANSFER_TOKEN_SALT=<your-transfer-token-salt>
    - DATABASE_CLIENT=sqlite
    - DATABASE_FILENAME=.tmp/data.db
    - JWT_SECRET=<your-jwt-secret>
 

Start the server:
    
    yarn develop



### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

    yarn build

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
yarn start
```

### `API Endpoints`
The backend provides the following GraphQL API endpoints:
- `/graphql` - Access the GraphQL Playground for interacting with the API.


### `Usage`
- Access the GraphQL Playground at http://<your-host>:<your-port>/graphql
- Use the available GraphQL queries and mutations to interact with the API and manage stores.


### Example
- fetch single record by Id
![Screenshot 2023-07-03 231443](https://github.com/sagiv1996/crop-store-backend/assets/71065719/b0360571-6b9a-43d5-8fc4-b4c11c618f4f)
- fetch all records, and add distance from this location
![Screenshot 2023-07-03 231519](https://github.com/sagiv1996/crop-store-backend/assets/71065719/2152ea19-5af2-44ed-b767-0dc71ca6d5fd)
