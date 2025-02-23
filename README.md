Poll Application

Introduction

The Poll Application is a full-stack web application that allows users to submit votes and view poll results in a structured and interactive way. This project is built using React.js (Frontend), Node.js with Express (Backend), and MySQL (Database). It is designed for learning purposes, providing students with insights into full-stack development, database management, and API handling.

Features

User-friendly voting system with a dropdown list of parties.

Stores votes in a MySQL database.

Fetches and displays poll results in a dynamic way.

Secure API endpoints for data management.

Tech Stack

Frontend: React.js

Backend: Node.js with Express

Database: MySQL

Additional Libraries:

Axios (for API requests)

Cors (for handling cross-origin requests)

Installation and Setup

1. Clone the Repository

git clone https://github.com/yourusername/poll-app.git
cd poll-app

2. Backend Setup

cd backend
npm install  # Install dependencies

Configure MySQL Database

Ensure MySQL is running and create a database:

CREATE DATABASE poll_db;

Update the backend/config/db.js file with your database credentials:

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'polluser',
    password: 'your_password',
    database: 'poll_db',
});
module.exports = pool;

Run the backend server:

node app.js

3. Frontend Setup

cd ../frontend
npm install  # Install dependencies
npm start    # Start the frontend server

The frontend should now be accessible at http://localhost:3000.

API Endpoints

Submit a Vote

POST /poll/submit

Request Body:

{
  "name": "John Doe",
  "department": "CSD",
  "party": "AIADMK Alliance"
}

Response:

{
  "message": "Vote submitted successfully!"
}

Fetch Results

GET /results

Response:

{
  "CSD": [
    { "party": "AIADMK Alliance", "count": 10 },
    { "party": "DMK", "count": 8 }
  ],
  "ECE": [
    { "party": "BJP", "count": 15 }
  ]
}

Conclusion

This project provides a complete walkthrough of building a full-stack polling application. While it currently runs on a local environment, students can explore CI/CD pipelines and containerization with Docker/Kubernetes to automate deployments and scale the application.

For further learning, consider:

Setting up a Jenkins pipeline to automate testing and deployment.

Dockerizing the app for easy deployment on cloud servers.

Enhancing the UI further with Tailwind CSS.

Happy Coding! 🚀


