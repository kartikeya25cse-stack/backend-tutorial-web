# Backend Tutorial – Node.js, Express & MongoDB

A beginner-friendly backend project built using Node.js, Express.js and MongoDB. This project demonstrates REST APIs and CRUD operations (Create, Read, Update and Delete) using MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman
- dotenv
- CORS

## Project Structure

```text
backend-tutorial/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── itemController.js
│
├── models/
│   └── itemModel.js
│
├── routes/
│   └── itemRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/kartikeya25cse-stack/backend-tutorial-web.git
```

Navigate to the project directory:

```bash
cd backend-tutorial-web
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root directory.

Add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Replace the placeholder with your actual MongoDB Atlas connection string.

**Important:** Never upload your `.env` file or MongoDB credentials to GitHub.

## Run the Project

Start the server:

```bash
npm start
```

For development with automatic restarting:

```bash
npm run dev
```

The backend server runs on:

`http://localhost:5001`

## API Endpoints

Base URL: `http://localhost:5001/api/items`

| Method | Endpoint | Operation |
|---|---|---|
| POST | /api/items | Create an item |
| GET | /api/items | Get all items |
| PUT | /api/items/:id | Update an item |
| DELETE | /api/items/:id | Delete an item |

## Sample JSON

```json
{
  "name": "Laptop",
  "description": "Dell Inspiron Laptop",
  "price": 55000,
  "quantity": 10
}
```

## API Testing

All CRUD operations can be tested using the Postman application.

## Learning Objectives

- Understanding Node.js project setup.
- Connecting MongoDB Atlas with Mongoose.
- Creating MongoDB database models.
- Building Express routes and controllers.
- Implementing REST APIs.
- Performing CRUD operations.
- Testing APIs using Postman.
- Using Git and GitHub for version control.

## Author

Kartikeya

## GitHub Repository

https://github.com/kartikeya25cse-stack/backend-tutorial-web
