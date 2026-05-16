# 🚌 Bus Booking System

A modern full-stack Bus Booking Web Application built using the MERN Stack.  
Users can search buses, select seats in real-time, lock/unlock seats, and book tickets securely.

---

# 🚀 Features

## 👤 User Features

- Search buses by pickup and drop location
- View bus details
- Interactive seat layout
- Real-time seat locking system
- Seat unlock on deselect
- Prevent double booking
- Maximum 4 seats selection
- Payment summary page
- Responsive modern UI

---

# 🔐 Seat Locking System

This project includes a temporary seat locking mechanism similar to real-world booking platforms.

### Seat States

| State | Description |
|------|-------------|
| Available | Seat can be selected |
| Locked | Temporarily locked by another user |
| Booked | Permanently booked after payment |
| Selected | Selected by current user |

### Flow

1. User selects seat
2. Backend locks the seat
3. Other users cannot select it
4. If user deselects → seat unlocks
5. After payment → seat becomes booked

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 📁 Project Structure

```bash
client/
│
├── src/
│   ├── pages/
│   ├── components/
│   ├── assets/
│   └── App.jsx
│
server/
│
├── controllers/
├── routes/
├── models/
├── config/
└── server.js