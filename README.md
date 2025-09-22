# 🔗 URL Shortener with Redis and ORM

A fully functional, scalable, and modern **URL Shortener** application that transforms long URLs into short, encrypted versions for easy sharing and redirection.

This project is built with a focus on **performance**, **scalability**, **security**, and **clean code practices** using a modern full-stack tech stack.

---

## 🚀 Features

- 🔗 Shorten long URLs to encrypted short links
- ⚡ Fast redirection using Redis caching layer
- 🛡️ JWT-based authentication for user sessions
- 🔐 OAuth 2.0 support (Google, GitHub, etc.)
- 📊 Link analytics and click tracking (future scope)
- ⏳ Expiring temporary links (via Redis TTL)
- 🔁 Rate limiting per user/IP to prevent abuse
- 🖥️ Full-stack implementation (frontend + backend)
- 🧪 Ready for unit/integration testing

---

## 🛠 Tech Stack

### ✅ Frontend
- **React.js** – UI development
- **Tailwind CSS** – Utility-first styling
- **Redux Toolkit** – State management
- **Material UI (MUI)** – Component library

### ✅ Backend
- **Node.js + Express.js** – RESTful API & server
- **Sequelize (ORM)** – SQL abstraction with models, associations, and migrations
- **MySQL** – Relational database for persistent storage
- **Redis** – In-memory cache for performance & rate limiting
- **JWT (JSON Web Tokens)** – Authentication system
- **OAuth 2.0** – Authorization via third-party providers (Google, GitHub, etc.)
