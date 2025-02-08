## Node.js Boilerplate

This is a boilerplate for building Node.js applications using modern technologies such as E😝ress.js, MongoDB, TypeScript, and Joi for validation. It provides a solid foundation for setting up a Node.js project with essential configurations for API routes, validation, database connectivity, and environment management.

## Features

* **Node.js**: Asynchronous, event-driven JavaScript runtime.
* **Express.js**: Fast, unopinionated web framework for Node.js.
* **MongoDB**: NoSQL database for scalable applications.
* **TypeScript**: Type-safe JavaScript with static typing.
* **Joi**: Powerful schema description and validation library.

## Prerequisites

Before running the application, ensure you have the following installed on your local machine:

* [Node.js](https://nodejs.org/) (version 14.x or above)
* [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Getting Started

Follow these steps to set up and run the application on your local machine:

### 1\. Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2\. Create Environment Variables

Create a new file named `.env` in the root directory and add the following environment variables with your own values:

```
JWT_SECRET=your_jwt_secret
MONGO_URL=mongodb://localhost:27017/your-database-name
```

* `JWT_SECRET`: Secret key for signing and verifying JWT tokens.
* `MONGO_URL`: MongoDB connection string (replace `your-database-name` with your database name).

### 3\. Install Dependencies

Run the following command to install all required dependencies:

```
npm install
```

### 4\. Running the Application

* **Development Mode**: If you have `nodemon` installed globally, run:
  ```
  npm run dev
  ```
  This will start the application with live reload, automatically restarting the server on file changes.
* **Production Mode**: To start the application without live reload, run:
  ```
  npm start
  ```
  

The server will be running on `http`😕`/localhost`😽`000` (or the port you configure).

### 5\. Testing the API

You can use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the API endpoints.

## Project Structure

The project structure follows a modular approach to keep the code organized and maintainable:

```
.
├── src
│   ├── controllers    # Business logic for each API route
│   ├── models         # MongoDB models (using Mongoose)
│   ├── routes         # Route definitions
│   ├── middlewares    # Custom middleware (e.g., authentication)
│   ├── validations    # Joi schemas for request validation
│   └── utils          # Helper functions and utilities
├── .env               # Environment variables file
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project metadata and scripts
└── README.md          # Project documentation
```

## Scripts

The following scripts are available in the project:

* `npm run dev`: Start the development server with `nodemon`.
* `npm start`: Start the production server.
* `npm run build`: Compile TypeScript files into JavaScript in the `dist` directory.
* `npm run lint`: Run ESLint to check for code quality and formatting issues.

## Technologies Used

* **Node.js**: Runtime environment for executing JavaScript code server-side.
* **Express.js**: Web framework for building APIs and web applications.
* **MongoDB**: NoSQL database for storing and managing application data.
* **TypeScript**: Adds type safety and other modern features to JavaScript.
* **Joi**: Schema-based validation for validating request bodies, query parameters, etc.

## Validation

This project uses **Joi** for request validation. Joi schemas are defined in the `validations` directory and used in the routes to validate incoming data before passing it to the controllers.

Example of a Joi validation schema:

```
import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author
This Boilerplate is created By [AnandD17](https://github.com/anandd17).
