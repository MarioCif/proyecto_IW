import { Router } from "express";
import { login } from "../controllers/authController.js";
import { getUserType } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/login',login);
router.get('/auth/userType', getUserType);

export default router;