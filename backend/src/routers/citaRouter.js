import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import {
    getCitas,
    getCitaById,
    createCita,
    updateCita,
    deleteCita,
    crarCitasSemana,
    getCitasById,
    getCitasOcupadasById
} from "../controllers/citaController.js";

const router = Router();

router.get('/citas', getCitas);
router.get('/citas/:id', getCitaById);
router.get('/citasMed/:id',getCitasById);
router.get('/citasOcupadas/:rol/:id', getCitasOcupadasById);
router.post('/citas', verifyToken, createCita);
router.post('/citasSem/:id', verifyToken, crarCitasSemana);
router.put('/citas/:id', verifyToken, updateCita);
router.delete('/citas/:id', verifyToken, deleteCita);

export default router;