import { Router } from "express";
import {
    getCitas,
    getCitaById,
    createCita,
    updateCita,
    deleteCita,
} from "../controllers/citaController.js";

const router = Router();

router.get('/citas', getCitas);
router.get('/citas/:id', getCitaById);
router.post('/citas', createCita);
router.put('/citas/:id', updateCita);
router.delete('/citas/:id', deleteCita);

export default router;