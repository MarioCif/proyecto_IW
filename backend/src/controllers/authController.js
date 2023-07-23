import jwt from 'jsonwebtoken';
import { compareP } from "../helpers/handleBcrypt.js";
import { Usuario } from "../models/Usuario.js";
import { Medico } from "../models/Medico.js";
import { Mantenedor } from "../models/Mantenedor.js";

export const login = async (req, res) => {

    const { email, password } = req.body;
    var userType = '';

    try {

        const user = await Usuario.findOne({
            where: { email }
        })
        
        if (!user) {
    
            user = await Medico.findOne({
                where: { email }
            })
    
            if(!user){
    
                user = await Mantenedor.findOne({
                    where: { email }
                })
    
                if(!user) {
                    res.status(404);
                    res.send({ error: 'Usuario no registrado' });
                    return;
                }else{
                    userType = 'mantenedor'
                }
            }else{
                userType = 'medico'
            }
        }else{
            userType = 'usuario';
        }
    
        const checkPassword = await compareP(password, user.password);

        if(!checkPassword){
            return res.status(400).json({ message: "Correo o contraseña incorrectos" });
        }

        const payload = {
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            userType: userType
        }

        console.log(payload);
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '12h'})

        res.json({ token });
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });

    }
    
    
}
