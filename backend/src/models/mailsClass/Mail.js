import {google} from 'googleapis';
import nodemailer from 'nodemailer';

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = "258182245391-dm4bvp4e14ds3a69um05piplp779qfjh.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "ya29.a0AbVbY6PPLAcKH9u6OyECkJ_N0-TiJzJzHj295f6ZrT9jtv6OvDWarMNy8mnB8We4BbWthFarA3YCmcdG9OGPBzXceRpxRJIactZNLAHihV14teMYUAxXE5a0N_55K9rAkBqVqFmdOUHnT2M8Twri0cRqEvYBaCgYKAQoSARESFQFWKvPlE1tzfJaRU-PnGlvghPfNCg0163";


const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
const accessToken = oauth2Client.getAccessToken();


//la idea seria enviar la estructura html desde el front
export function mailCancelarCita(nombre,correoDestino,htmlMessage){
    const mailOptions = {
        from: `Hola ${nombre}, se ha cancelado tu cita <contrerasesparza2000@gmail.com>`,
        to: correoDestino,
        generateTextFromHTLM: true,
        html: htmlMessage
    }
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


    smtpTransport.sendMail(mailOptions,(error,res)=>{
        error ? console.log(error): console.log(res);
        smtpTransport.close();
    });
}






