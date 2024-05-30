import express from "express";
import UserController from "../controllers/userController.js";

const router = express();

router.get("/users", UserController.index);
router.get("/user/:id", UserController.show);

export default router;
