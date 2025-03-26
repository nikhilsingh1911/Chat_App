import express from "express";
import dotenv from "dotenv";
// const express = require("express");

import authRoutes from "./routes/auth.route.js";
dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is Running on port " + PORT);
});
