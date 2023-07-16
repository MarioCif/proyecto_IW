
import { compareP, encryptP } from "../helpers/handleBcrypt.js";
import { Medico } from "../models/Medico.js";

export const getMedicos = async (req, res) => {
    try {
        const medicos = await Medico.findAll();
        res.status(200).json(medicos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener medicos." });
    }
};

export const getMedicoById = async (req, res) => {
    try {
        const medico = await Medico.findByPk(req.params.id);
        res.json(medico);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el medico.' });
    }
};

export const createMedico = async (req, res) => {
    //el medico no se creara a menos que tenga un rut, email diferente

    try {
        const { rut, nombre, apellido, email, password, especialidad, img_url } = req.body;
        const passwordHash = await encryptP(password)

        const newM = await Medico.create({
            rut,
            nombre,
            apellido,
            email,
            password: passwordHash,
            especialidad,
            img_url,
        });


        console.log(newM)
        return res.sendStatus(200);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteMedico = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar si el medico existe
        const medicoExistente = await Medico.findByPk(id);

        if (!medicoExistente) {
            return res.status(404).json({ message: "Medico no encontrado" });
        }

        // Eliminar el medico
        await Medico.destroy({
            where: {
                id,
            },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateMedico = async (req, res) => {
    try {
        const { id } = req.params;
        const { rut, nombre, apellido, email, password, especialidad, img_url } = req.body;
        const passwordHash = await encryptP(password)

        const medicoExistente = await Medico.findOne({
            where: {
                id,
            },
        });
        if (!medicoExistente) {
            return res.status(404).json({ message: "Medico no encontrado" });
        }

        await Medico.update({
            nombre,
            apellido,
            rut,
            email,
            password: passwordHash,
            especialidad,
            img_url,

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

export const loginMedico = async (req, res) => {

    const { email, password } = req.body;
    const medico = await Medico.findOne({
        where: { email }
    })
    console.log(medico)
    if (!medico) {
        res.status(404);
        res.send({ error: 'Medico no registrado' });
        return
    }

    const checkPassword = await compareP(password, medico.password);

    if (checkPassword) {
        res.send({
            data: medico
        });
        return
    } else {
        res.status(404);
        res.send({
            error: 'Credenciales incorrectas'
        })
        return
    }
}


