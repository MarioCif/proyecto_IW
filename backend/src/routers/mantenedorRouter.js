import { Router } from "express";
import {
    getMantenedores,
    getMantenedorById,
    createMantenedor,
    updateMantenedor,
    deleteMantenedor,
} from "../controllers/mantenedorController.js";

const router = Router();

router.get('/mantenedores', getMantenedores);
router.get('/mantenedores/:id', getMantenedorById);
router.post('/mantenedores', createMantenedor);
router.put('/mantenedores/:id', updateMantenedor);
router.delete('/mantenedores/:id', deleteMantenedor);

export default router;