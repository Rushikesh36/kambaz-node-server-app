# Kambaz Node Server App 🖥️

A robust Node.js/Express backend server for the Kambaz learning management system. Handles API endpoints, database operations, user management, and course delivery.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Configuration](#configuration)

---

## 🎯 Overview

**Kambaz Node Server** is the backend API for the Kambaz learning platform. Built with Express.js and MongoDB, it provides RESTful endpoints for authentication, course management, quiz operations, and user data handling.

---

## ✨ Features

### Authentication
- **User Registration**: Create new accounts
- **Login/Logout**: Authentication with JWT
- **Session Management**: Session-based tracking
- **Role-Based Access**: Student/Instructor/Admin roles
- **Password Management**: Secure password handling

### Course Management
- **Course CRUD**: Create, read, update, delete
- **Module Management**: Organize course content
- **Material Upload**: Store course materials
- **Enrollment**: Student course registration
- **Progress Tracking**: Monitor student advancement

### Quiz System
- **Quiz Creation**: Build quizzes with questions
- **Question Types**: Multiple choice, short answer
- **Grading**: Auto-calculate scores
- **Analytics**: Track quiz performance
- **Reporting**: Generate statistics

### User Management
- **Profile Management**: User account details
- **Permissions**: Role-based access control
- **Activity Logging**: Track user actions
- **Data Validation**: Input verification
- **User Deactivation**: Account management

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime environment |
| **Express.js 5.x** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication |
| **CORS** | Cross-origin support |
| **Dotenv** | Environment configuration |
| **UUID** | Unique ID generation |
| **Axios** | HTTP client |

---

## 📦 Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/Rushikesh36/kambaz-node-server-app.git
   cd kambaz-node-server-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/kambaz
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```

4. **Start Server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - User login
POST   /api/auth/logout       - User logout
POST   /api/auth/refresh      - Refresh token
GET    /api/auth/verify       - Verify token
```

### Courses
```
GET    /api/courses           - Get all courses
GET    /api/courses/:id       - Get course details
POST   /api/courses           - Create course
PUT    /api/courses/:id       - Update course
DELETE /api/courses/:id       - Delete course
POST   /api/courses/:id/enroll - Enroll in course
```

### Quizzes
```
GET    /api/quizzes           - Get all quizzes
GET    /api/quizzes/:id       - Get quiz details
POST   /api/quizzes           - Create quiz
POST   /api/quizzes/:id/submit - Submit quiz
GET    /api/quizzes/:id/results - Get quiz results
```

### Users
```
GET    /api/users/:id         - Get user profile
PUT    /api/users/:id         - Update profile
GET    /api/users/:id/courses - User's courses
GET    /api/users/:id/quizzes - User's quiz history
```

---

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: String (student/instructor/admin),
  profile: {
    bio: String,
    avatar: String,
    phone: String
  },
  enrolledCourses: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Courses Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  instructor: ObjectId (ref: User),
  modules: [ObjectId],
  students: [ObjectId],
  startDate: Date,
  endDate: Date,
  status: String (draft/published/archived),
  createdAt: Date,
  updatedAt: Date
}
```

### Quizzes Collection
```javascript
{
  _id: ObjectId,
  title: String,
  course: ObjectId (ref: Course),
  questions: [ObjectId],
  duration: Number (minutes),
  passingScore: Number,
  attempts: [{
    student: ObjectId,
    score: Number,
    submittedAt: Date
  }],
  createdAt: Date
}
```

---

## ⚙️ Configuration

### Environment Variables

```env
# Server
PORT=3001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/kambaz
MONGO_USER=admin
MONGO_PASS=password

# Authentication
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```

---

## 🔐 Security

- ✅ **Password Hashing**: bcryptjs for secure passwords
- ✅ **JWT Authentication**: Secure token-based auth
- ✅ **CORS Configuration**: Prevent unauthorized requests
- ✅ **Input Validation**: Santize user inputs
- ✅ **Rate Limiting**: Prevent brute force attacks
- ✅ **Environment Secrets**: Secure credential management

---

## 🚀 Performance

### Optimization Techniques
- **Database Indexing**: Optimized MongoDB queries
- **Caching**: Reduce database hits
- **Pagination**: Handle large datasets
- **Compression**: Gzip response compression
- **Load Balancing**: Distribute traffic

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

---

## 📊 Middleware

- **CORS**: Enable cross-origin requests
- **Body Parser**: Parse JSON bodies
- **Session Middleware**: Session management
- **Authentication**: Verify JWT tokens
- **Error Handler**: Centralized error handling

---

## 🎓 Learning Value

Perfect for learning:
- **Express.js**: REST API development
- **MongoDB**: NoSQL database
- **Mongoose**: Schema design
- **JWT**: Token-based authentication
- **SQL/NoSQL**: Database design patterns
- **RESTful API**: API design principles

---

## 🚨 Error Handling

### Error Responses

```javascript
// 400 Bad Request
{ error: "Invalid input data" }

// 401 Unauthorized
{ error: "Authentication required" }

// 403 Forbidden
{ error: "Access denied" }

// 404 Not Found
{ error: "Resource not found" }

// 500 Server Error
{ error: "Internal server error" }
```

---

## 📄 License

MIT License - Open source

---

## 👨‍💻 Author

**Rushikesh Wani**  
GitHub: [@Rushikesh36](https://github.com/Rushikesh36)  
Portfolio: [rushikesh36.github.io](https://rushikesh36.github.io)

---

**Last Updated**: February 21, 2024  
**Version**: 1.0.0  
**Status**: Active Development

