import Sequelize from 'sequelize';

var db = {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
};
var dbPass = 'admin1';

export const sequelize = new Sequelize('resermed', 'postgres', dbPass, db);
