import {google} from 'googleapis';
import nodemailer from 'nodemailer';

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = "258182245391-dm4bvp4e14ds3a69um05piplp779qfjh.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "ya29.a0AbVbY6N2Expm9-MwFPcZJL7jgX_eCPaAp_2pqYOxRgs_5mgE73tNhZI5OBA8yrLuJBqJVdtlQvynF7-AkwqII6x-wGITYpFoiSGF9_2UQwSGwDkHk0E-dD0ccxLRYmQj7x_Q6nJeoX0XbAula90rkRvhD__kaCgYKAcgSARESFQFWKvPlMNY7SoE0erP8OoSBXYz59g0163";


const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
const accessToken = oauth2Client.getAccessToken();
const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    
    auth: {
        type: "OAuth2",
        subject: "RESERMED",
        user: "contrerasesparza2000@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
    }
});

//la idea seria enviar la estructura html desde el front
export function mailCancelarCita(nombre,correoDestino,htmlMessage){
    const mailOptions = {
        from: `Hola ${nombre}, se ha cancelado tu cita <contrerasesparza2000@gmail.com>`,
        to: correoDestino,
        generateTextFromHTLM: true,
        html: htmlMessage
    }
    


    smtpTransport.sendMail(mailOptions,(error,res)=>{
        error ? console.log(error): console.log(res);
        smtpTransport.close();
    });
}

export function enviarMailContacto(nombre,email,telefono,sobreMi){
    let htmlMessageContacto = `
        <h1>Hola has recibido un mensaje de un medico</h1>
        <table>
            <thead>
                <th>nombre</th>
                <th>email</th>
                <th>telefono</th>
                <th>comentarios</th>
            </thead>
            <tbody>
                <tr>
                    <td>${nombre}</td>
                    <td>${email}</td>
                    <td>${telefono}</td>
                    <td>${sobreMi}</td>
                </tr>
            </tbody>
        </table>
    `;
    const mailOptions = {
        from: `<${email}>`,
        to: "eduardo.contreras1902@alumnos.ubiobio.cl", //podemos incluir el correo
        generateTextFromHTLM: true,
        html: htmlMessageContacto
    }
   


    smtpTransport.sendMail(mailOptions,(error,res)=>{
        error ? console.log(error): console.log(res);
        smtpTransport.close();
    });
}





