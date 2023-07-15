import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Cita } from "./Citas.js";

export const Usuario = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    rut: {
        type: DataTypes.STRING(12),
        unique: true
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
    },
    // img_url: {
    //     type: DataTypes.STRING,
    // },
    rol: {
        type: DataTypes.INTEGER,
    },
},
    {timestamps: false}
);
//un usuario puede tener muchas citas
Usuario.hasMany(Cita,{
    foreingKey: 'us_id',
    sourceKey: 'id'
})
//muchas citas pertenecen a un usuario
Cita.belongsTo(Usuario,{
    foreingKey: 'us_id',
    targetId: 'id'
})