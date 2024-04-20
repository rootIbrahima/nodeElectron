const Sequelize = require('sequelize');
const { readFileSync } = require('fs');
const configPath = './config/config.json';
const config = JSON.parse(readFileSync(configPath));

const database = config.development.database;
const user = config.development.username;
const password = config.development.password;
const host = config.development.host;
const dialect = config.development.dialect;
const port = 3306;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: dialect
});

const Clients = sequelize.define('Clients', {
    prenom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: true
    },
    numcompte: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    solde: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = {
    sequelize: sequelize,
    Clients: Clients
};
