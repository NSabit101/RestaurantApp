import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import menuItemRoutes from "./routes/menuItem.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/menu-items", menuItemRoutes);
app.use("/api/users", userRoutes);

// Debug: log MONGO_URI to check if loaded correctly
console.log("Connecting to MongoDB at:", process.env.MONGO_URI);

// Connect to MongoDB with options
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
  
  // Start server only after successful DB connection
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit process if DB connection fails
});

// Optional: simple root route
app.get("/", (req, res) => {
  res.send("Welcome to Restaurant App API");
});
