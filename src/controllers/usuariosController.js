//importar servicio
const ingresar = require("../services/autenticarService")
const listarUsuarios = async (req, res) => {
    res.json({ message: "listado de usuarios" })
}

module.exports = listarUsuarios