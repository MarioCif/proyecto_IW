import express from "express";
import cors from "cors";
import usuarioRouter from './routers/usuarioRouter.js'
const whiteList=['http://localhost:4200','...'];
const app = express();

// middleware

app.use(cors({origin:whiteList}));
app.use(function (req,res,next){
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-kev. x-client-token. x-client-secret, Authorization");
    next()
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(usuarioRouter);

export default app;