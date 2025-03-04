# Task Manager API

## Overview
The **Task Manager API** is a simple RESTful API built using **Node.js** and **Express.js**. It allows users to **create, retrieve, update, and delete tasks**. Each task has a title, description, and completion status.

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14+ recommended)
- **npm** (Node Package Manager)

### Installation Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-api
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the server:**
   ```sh
   npm start
   ```
   The API will be running on `http://localhost:5000` by default.

---

## API Endpoints

### 1. **Create a Task**
- **Endpoint:** `POST /tasks`
- **Description:** Creates a new task.
- **Request Body:**
  ```json
  {
    "title": "New Task",
    "description": "This is a sample task",
    "completed": false
  }
  ```
- **cURL Command:**
  ```sh
  curl -X POST http://localhost:5000/tasks \
       -H "Content-Type: application/json" \
       -d '{"title": "New Task", "description": "This is a sample task", "completed": false}'
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "New Task",
    "description": "This is a sample task",
    "completed": false
  }
  ```

---

### 2. **Get All Tasks**
- **Endpoint:** `GET /tasks`
- **Description:** Retrieves all tasks.
- **cURL Command:**
  ```sh
  curl -X GET http://localhost:5000/tasks
  ```
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "New Task",
      "description": "This is a sample task",
      "completed": false
    }
  ]
  ```

---

### 3. **Get a Single Task**
- **Endpoint:** `GET /tasks/:id`
- **Description:** Retrieves a task by ID.
- **cURL Command:**
  ```sh
  curl -X GET http://localhost:5000/tasks/1
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "New Task",
    "description": "This is a sample task",
    "completed": false
  }
  ```

---

### 4. **Update a Task**
- **Endpoint:** `PUT /tasks/:id`
- **Description:** Updates an existing task.
- **Request Body:**
  ```json
  {
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true
  }
  ```
- **cURL Command:**
  ```sh
  curl -X PUT http://localhost:5000/tasks/1 \
       -H "Content-Type: application/json" \
       -d '{"title": "Updated Task", "description": "Updated description", "completed": true}'
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true
  }
  ```

---

### 5. **Delete a Task**
- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Deletes a task by ID.
- **cURL Command:**
  ```sh
  curl -X DELETE http://localhost:5000/tasks/1
  ```
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## Running Tests
To run the test suite, use:
```sh
npm run test
```
This will execute test cases written using **tap**.

## License
This project is licensed under the **MIT License**.

## Author
Developed by **Dinesh Reddy**.

