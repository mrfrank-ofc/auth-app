const express = require("express");
   const mongoose = require("mongoose");
   const dotenv = require("dotenv");
   const authRoutes = require("./routes/auth");

   dotenv.config();

   const app = express();

   // Connect to MongoDB
   mongoose
     .connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => console.log("Connected to MongoDB"))
     .catch((err) => console.error("MongoDB connection error:", err));

   // Middleware
   app.use(express.urlencoded({ extended: true }));
   app.use(express.static("public"));

   // Routes
   app.use("/", authRoutes);

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
