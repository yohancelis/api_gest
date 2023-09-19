const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador

const { ventasGet, ventasPut, ventasPost, ventasDelete } = require('../controller/ventas')

route.get('/', ventasGet)

route.post('/', ventasPost)

route.put('/', ventasPut)

route.delete('/', ventasDelete)


module.exports = route