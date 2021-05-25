const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "senha",
    database: "agenda_petshop"
})

module.exports = conexao