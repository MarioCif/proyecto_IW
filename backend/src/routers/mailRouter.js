import { Router } from "express";
import { enviarMailContac } from "../controllers/mailController.js";
const router = Router();

router.post('/contacto',enviarMailContac);

export default router;