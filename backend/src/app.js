import express from "express";
import cors from "cors";
import usuarioRouter from './routers/usuarioRouter.js'

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(usuarioRouter);

export default app;