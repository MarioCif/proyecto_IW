import { compareP } from "../helpers/handleBcrypt.js";
import { Usuario } from "../models/Usuario.js";
import { Medico } from "../models/Medico.js";
import { Mantenedor } from "../models/Mantenedor.js";

export const login = async (req, res) => {

    const { email, password } = req.body;
    var sessionToken = '';
    
    var user = await Usuario.findOne({
        where: { email }
    })
    console.log(user)
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
                return
            }else{
                sessionToken = 'mantenedor'
            }
        }else{
            sessionToken = 'medico'
        }
    }else{
        sessionToken = 'usuario';
    }

    

    const checkPassword = await compareP(password, user.password);

    if (checkPassword) {
        res.send({
            data: user,
            sessionToken: sessionToken
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
