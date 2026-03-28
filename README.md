# 🔐 MERN Authentication System

A full-stack authentication system built with the **MERN Stack** (MongoDB, Express, React, Node.js) featuring JWT-based secure authentication, email verification via OTP, and password reset functionality.

> 📺 Based on the tutorial by [GreatStackDev](https://www.youtube.com/@GreatStackDev)

---

## ✨ Features

- 📝 User Registration
- 🔑 User Login with JWT Authentication
- 📧 Email Verification via 6-digit OTP
- 🔒 Password Reset with OTP
- 🛡️ Protected Routes
- 🎨 Responsive UI with React + Tailwind CSS

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JSON Web Token (JWT) | Secure authentication |
| Nodemailer | Sending OTP emails |
| bcryptjs | Password hashing |
| dotenv | Environment variable management |

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI library |
| Tailwind CSS | Styling |
| Axios | HTTP requests |
| React Router DOM | Client-side routing |

---

## 📁 Project Structure

```
mern-auth/
├── backend/
│   ├── config/
│   │   └── mongodb.js          # MongoDB connection
│   ├── controllers/
│   │   └── authController.js   # Auth logic (register, login, OTP)
│   ├── middleware/
│   │   └── userAuth.js         # JWT verification middleware
│   ├── models/
│   │   └── userModel.js        # User schema
│   ├── routes/
│   │   └── authRoutes.js       # API routes
│   ├── .env                    # Environment variables
│   └── server.js               # Entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Images, icons
│   │   ├── components/         # Reusable components
│   │   ├── context/            # React context (auth state)
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── EmailVerify.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- A Gmail account (for Nodemailer / OTP emails)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-auth.git
cd mern-auth
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
# Server
PORT=4000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Nodemailer (Gmail)
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

> ⚠️ **Important:** Use a [Gmail App Password](https://support.google.com/accounts/answer/185833), not your regular Gmail password.

Start the backend server:

```bash
npm run dev
```

The server will start at `http://localhost:4000`.

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend development server:

```bash
npm run dev
```

The app will start at `http://localhost:5173`.

---

## 🔌 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register a new user | ❌ |
| POST | `/login` | Login and receive JWT | ❌ |
| POST | `/logout` | Logout user | ❌ |
| POST | `/send-verify-otp` | Send email verification OTP | ✅ |
| POST | `/verify-account` | Verify account with OTP | ✅ |
| GET | `/is-auth` | Check if user is authenticated | ✅ |
| POST | `/send-reset-otp` | Send password reset OTP | ❌ |
| POST | `/reset-password` | Reset password with OTP | ❌ |

---

## 🖥️ Pages & Flow

```
/           → Home (protected)
/login      → Login form
/register   → Registration form
/verify     → Email OTP verification
/reset      → Password reset (request OTP → verify → new password)
```

---

## 🔐 Authentication Flow

### Registration
1. User fills out the registration form
2. Account is created; a **6-digit OTP** is sent to the registered email
3. User verifies their account by entering the OTP

### Login
1. User submits email and password
2. Server validates credentials and issues a **JWT stored in an HTTP-only cookie**
3. User is redirected to the protected home page

### Password Reset
1. User enters their registered email
2. A **6-digit OTP** is sent to that email
3. User enters the OTP and sets a new password

---

## 🧪 Scripts

### Backend
```bash
npm run dev     # Start with nodemon (development)
npm start       # Start without nodemon (production)
```

### Frontend
```bash
npm run dev     # Start Vite dev server
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 🚀 Deployment

### Backend (e.g., Render / Railway)
- Set all environment variables from `.env` in the hosting dashboard
- Set start command to `npm start`

### Frontend (e.g., Vercel / Netlify)
- Set `VITE_BACKEND_URL` to your deployed backend URL
- Build command: `npm run build`
- Output directory: `dist`

---

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.x",
  "mongoose": "^8.x",
  "jsonwebtoken": "^9.x",
  "bcryptjs": "^2.x",
  "nodemailer": "^6.x",
  "cookie-parser": "^1.x",
  "cors": "^2.x",
  "dotenv": "^16.x"
}
```

### Frontend
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x",
  "tailwindcss": "^3.x"
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

Tutorial by **[GreatStackDev](https://www.youtube.com/@GreatStackDev)**  
📺 Watch the full tutorial on YouTube
