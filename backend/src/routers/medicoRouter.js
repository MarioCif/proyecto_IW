import { Router } from "express";
import {
    getMedicos,
    getMedicoById,
    createMedico,
    updateMedico,
    deleteMedico,
} from "../controllers/medicoController.js";

const router = Router();

router.get('/medicos', getMedicos);
router.get('/medicos/:id', getMedicoById);
router.post('/medicos', createMedico);
router.put('/medicos/:id', updateMedico);
router.delete('/medicos/:id', deleteMedico);

export default router;