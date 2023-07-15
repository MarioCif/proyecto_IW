import { Router } from "express";
import {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario
} from "../controllers/usuarioController.js";

const router = Router();

router.post('/login',loginUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;