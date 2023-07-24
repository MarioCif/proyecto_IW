import {google} from 'googleapis';
import nodemailer from 'nodemailer';

//const OAuth2 = google.auth.OAuth2;


const smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'contrerasesparza2000@gmail.com',
        pass: 'poncogxnptmktbbn'
    }
});

smtpTransport.verify().then(()=>{
    console.log("no hay error")
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





