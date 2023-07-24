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
        const { fecha, hora_inicio, hora_termino, observacion, asiste, pagada, libre, UsuarioId, MedicoId } = req.body;

        const newC = await Cita.create({
            fecha,
            hora_inicio,
            hora_termino,
            observacion,
            asiste,
            pagada,
            libre,
            UsuarioId,
            MedicoId
        });


        console.log(newC)
        return res.status(200).json({ message: "oki :3" });
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

        return res.status(200).json({ message: "oki :3"});
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateCita = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, hora_inicio, hora_termino, observacion, asiste, pagada, libre, UsuarioId, MedicoId } = req.body;

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
            libre,
            UsuarioId,
            MedicoId

        }, {
            where: {
                id,
            },
        });

        return res.status(200).json( { message: "oki :3"} );
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const crarCitasSemana = async (req, res) =>{
    try {
        const { id } = req.params;
        const { duracion, intervalo, protegido1, protegido2, jornadaI, jornadaT } = req.body;

        const d = new Date();
        // let day = d.getDay();
        let day = 1;
        let Inicio = new Date("07/06/2021 "+jornadaI);
        let Termino = new Date("07/06/2021 "+jornadaT);
        let ProtegidoI = new Date("07/06/2021 "+protegido1);
        let ProtegidoT = new Date("07/06/2021 "+protegido2);

        let dif = minutesDiff(ProtegidoT, ProtegidoI);
        console.log(dif);

        const newCita = await Cita.create({
            
        });

        // while(day != 0 && day != 6){
            if(parseInt(intervalo) == 0){
                while(Inicio.getHours() <= Termino.getHours()){
                    if(Inicio.getHours() == ProtegidoI.getHours()){
                        if(Inicio.getMinutes() <= ProtegidoI.getMinutes() || Inicio.getMinutes() > ProtegidoI.getMinutes()){
                            addMinutes(Inicio, dif);
                        }
                    }else{
                        addMinutes(Inicio, parseInt(duracion));
                    }
                } 
            }else{

            }

            day++;

            Inicio = new Date("01 Jan 1970 "+jornadaI);
            Termino = new Date("01 Jan 1970 "+jornadaT); 
            
        // }
        return res.status(200).json({ message: intervalo, Inicio, Termino, ProtegidoI, ProtegidoT });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor"});
    }
}

function addMinutes(date, minutes){
    return date.setMinutes(date.getMinutes() + minutes);
}
function minutesDiff(dateTimeValue2, dateTimeValue1) {
   var differenceValue =(dateTimeValue2.getTime() - dateTimeValue1.getTime()) / 1000;
   differenceValue /= 60;
    return Math.abs(Math.round(differenceValue));
}