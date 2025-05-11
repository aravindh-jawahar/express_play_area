# Task Manager App

A task and project management application built with **Node.js**, **Express.js**, and **PostgreSQL**. It includes user authentication and allows users to create and manage tasks organized under projects and companies.

---

## 🚀 Features

- ✅ User Authentication (Signup/Login)
- ✅ Create, update, delete tasks
- ✅ Group tasks under projects and companies
- ✅ PostgreSQL database integration using Sequelize
- ✅ RESTful API design
- ✅ Environment variable support with `.env`
- ✅ Live reload in development with Nodemon

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Dev Tools:** Nodemon, dotenv

---

## 📁 Project Structure

express_play_area/
├── app.js
├── config/
│ └── db.js
├── controllers/
├── models/
├── routes/
├── middlewares/
├── .env
├── .gitignore
├── package.json
└── README.md

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app

npm install

DB_URL=postgres://your_username@localhost:5432/task_manager_db
PORT=3000



npm run dev

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | `/auth/signup` | Register a new user |
| POST   | `/auth/login`  | Login existing user |
| GET    | `/tasks`       | Get all tasks       |
| POST   | `/tasks`       | Create a new task   |
| PUT    | `/tasks/:id`   | Update a task       |
| DELETE | `/tasks/:id`   | Delete a task       |
```

npm run dev # Start the server with nodemon
npm start # Start the server without nodemon

📄 License
This project is licensed under the MIT License.
