const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const cors = require("cors"); // Add this line
const path = require('path');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("server is running")
})
// Add CORS middleware here
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
