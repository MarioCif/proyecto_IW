import { Usuario } from "../models/Usuario.js";

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios." });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario.' });
    }
};

export const createUsuario = async (req, res) => {
    try {
        
        const { nombre, apellido, rut, email, password, rol } = req.body;

        await Usuario.create({
            rut,
            nombre,
            apellido,
            email,
            password,
            rol,
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar si el usuario existe
        const usuarioExistente = await Usuario.findByPk(id);

        if (!usuarioExistente) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Eliminar el usuario
        await Usuario.destroy({
            where: {
                id,
            },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, rut, email, password, rol } = req.body;

        const usuarioExistente = await Usuario.findOne({
            where: {
                id,
            },
        });
        if (!usuarioExistente) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        await Usuario.update({
            nombre,
            apellido,
            rut,
            email,
            password,
            rol,
        }, {
            where: {
                id,
            },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}