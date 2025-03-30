// qJCtWwkH3aMtX3jx mongodb

import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updatePorfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updatePorfile);

router.get("/check", protectRoute, checkAuth);

export default router;
