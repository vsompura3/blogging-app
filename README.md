# BlogHub - A full stack blog application

## Overview

This is a MERN (MongoDB, Express, React, Node.js) blog application with
front-end built using ReactJS and Vite, back-end built with NodeJS and Express,
and data stored in MongoDB using Mongoose. The application also uses TailwindCSS
for styling and React-Router for client-side routing. Postman can be used to
test the backend API.

## Setup Instructions

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB

### Frontend Setup

1. Clone the repository:
2. Navigate to the frontend directory:
3. Install the dependencies:
4. Start the development server:
5. The frontend will be running at
   [http://localhost:3000](http://localhost:3000).

### Backend Setup

1. Navigate to the backend directory:
2. Install the dependencies:
3. Set up the MongoDB connection:
   - Make sure your MongoDB server is running.
   - Create a `.env` file in the `backend` directory and add your MongoDB
     connection URL as follows: MONGO_URI=<HERE_GOES_YOUR_MONGODB_URI>
4. Start the backend server:
5. The backend will be running at
   [http://localhost:8000](http://localhost:8000).

### Testing Backend with Postman

You can use Postman to test the backend API endpoints:

1. Open Postman and create a new request.
2. Set the request type (GET, POST, etc.) and URL to
   [http://localhost:8000/api/posts](http://localhost:8000/api/posts) or any
   other available API endpoint.
3. Add headers or body if required for the specific request type.
4. Send the request and inspect the response.

## Features

- User authentication and authorization (not covered in this setup).
- CRUD operations for blog posts.
- Infinite scrolling for blog posts.

Feel free to explore the code and customize the application as per your
requirements. PR and contributions are much appreciated.

Happy coding! 🚀
