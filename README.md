# Notes API - Express.js

A lightweight backend API built with Node.js and Express.js that allows users to create, read, update, and delete (CRUD) notes. This project serves as a foundational understanding of RESTful API architecture, routing, and middleware implementation.

## 🚀 Features

*   **RESTful Architecture:** Clear, standard endpoints for CRUD operations.
*   **In-Memory Storage:** Uses a JavaScript array to store data temporarily (great for testing without database setup).
*   **Express Middleware:** Utilizes `express.json()` to parse incoming JSON payloads.
*   **Dynamic Routing:** Uses route parameters (`req.params`) for targeted updates and deletions.

## 🛠️ Tech Stack

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.

## 📂 Folder Structure

```text
notes-app/
├── src/
│   └── app.js          # Express app setup and API routes
├── server.js           # Server entry point
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation