import { enviarMailContacto } from "../models/mailsClass/Mail.js";


export const enviarMailContac = async (req,res) =>{
    try {
        
        const {nombre,email,telefono,sobreMi} = req.body;

        enviarMailContacto(nombre,email,telefono,sobreMi);
        res.status(200);
    } catch (error) {
        res.status(500).json({message: error});
    }
}

