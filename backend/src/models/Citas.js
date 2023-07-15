import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Cita = sequelize.define('Citas',{
    
    id_cita:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_cita:{
        type: DataTypes.DATE
    },
    observ:{
        type: DataTypes.STRING(255)
    },
    asiste: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }


},
{timestamps: false}
);