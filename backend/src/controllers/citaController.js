import { Cita } from "../models/Cita.js";

export const getCitas = async (req, res) => {
    try {
        const citas = await Cita.findAll();
        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener citas." });
    }
};

export const getCitaById = async (req, res) => {
    try {
        const cita = await Cita.findByPk(req.params.id);
        res.json(cita);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la cita.' });
    }
};

export const createCita = async (req, res) => {

    try {
        const { fecha, hora_inicio, hora_termino, observacion, asiste, pagada, libre } = req.body;

        const newC = await Cita.create({
            fecha,
            hora_inicio,
            hora_termino,
            observacion,
            asiste,
            pagada,
            libre
        });


        console.log(newC)
        return res.sendStatus(200);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteCita = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar si la cita existe
        const citaExistente = await Cita.findByPk(id);

        if (!citaExistente) {
            return res.status(404).json({ message: "Cita no encontrada" });
        }

        // Eliminar la cita
        await Cita.destroy({
            where: {
                id,
            },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateCita = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, hora_inicio, hora_termino, observacion, asiste, pagada, libre } = req.body;

        const citaExistente = await Cita.findOne({
            where: {
                id,
            },
        });
        if (!citaExistente) {
            return res.status(404).json({ message: "Cita no encontrada" });
        }

        await Cita.update({
            fecha,
            hora_inicio,
            hora_termino,
            observacion,
            asiste,
            pagada,
            libre

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