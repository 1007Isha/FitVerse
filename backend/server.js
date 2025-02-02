const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const cors = require("cors");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// Define allowed origins
const allowedOrigins = ['https://fit-verse-two.vercel.app'];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

// Use CORS middleware with our options
app.use(cors(corsOptions));

// Parse JSON bodies for incoming requests
app.use(express.json());

// Basic route to confirm the server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
