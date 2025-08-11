import express from "express";
import { createMenuItem, getMenuItems, getMenuItem, updateMenuItem, deleteMenuItem } from "../controllers/menuItem.controller.js";
import { auth, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, isAdmin, createMenuItem);
router.get("/", getMenuItems);
router.get("/:id", getMenuItem);
router.put("/:id", auth, isAdmin, updateMenuItem);
router.delete("/:id", auth, isAdmin, deleteMenuItem);

export default router;
