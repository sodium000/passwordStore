# Password Manager (passOp-mongo)

## About This Project

**passOp-mongo** is a full-stack password management application that allows users to securely store, manage, and organize their passwords for different websites and services. This project provides a modern, user-friendly interface for managing your digital credentials with persistent storage using MongoDB.

### Key Features

- **Password Storage**: Securely store passwords for multiple websites and services
- **CRUD Operations**: Create, read, update, and delete password entries
- **Password Visibility Toggle**: Show/hide passwords with a single click
- **Form Validation**: Ensures all fields are filled and passwords meet minimum length requirements (8 characters)
- **Responsive Design**: Modern UI built with TailwindCSS that works across different screen sizes
- **Persistent Storage**: All passwords are stored in MongoDB database for reliable data persistence
- **Real-time Updates**: Changes are immediately reflected in the password list

### Technology Stack

#### Frontend
- **React 19** - Modern UI library for building interactive interfaces
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for styling
- **React Toastify** - For user notifications
- **UUID** - For generating unique identifiers

#### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for storing password data
- **CORS** - Cross-origin resource sharing support
- **Body-parser** - Middleware for parsing request bodies

### Project Structure

```
passOp-mongo/
├── backend/          # Express.js server and MongoDB integration
│   ├── server.js     # Main server file with API endpoints
│   └── package.json  # Backend dependencies
├── src/              # React frontend application
│   ├── App.jsx       # Main application component
│   ├── component/    # Reusable components (Navbar, Footer)
│   └── main.jsx      # Application entry point
└── public/           # Static assets (images, icons)
```

### API Endpoints

- `GET /` - Retrieve all stored passwords
- `POST /` - Save a new password entry
- `DELETE /` - Delete a password entry

### Getting Started

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Start MongoDB**
   Ensure MongoDB is running on `localhost:27017`

4. **Start Backend Server**
   ```bash
   cd backend
   node server.js
   ```

5. **Start Frontend Development Server**
   ```bash
   npm run dev
   ```

### Usage

1. Enter the website URL, username, and password in the form
2. Click "Submit" to save the password entry
3. View all saved passwords in the table below
4. Click the edit icon to modify an existing entry
5. Click the delete icon to remove a password entry
6. Use the eye icon to toggle password visibility

### Security Note

⚠️ **Important**: This is a development project. For production use, implement proper password encryption, authentication, and security best practices.

---

**Developer**: Sod!umRdX  
**Year**: 2025

