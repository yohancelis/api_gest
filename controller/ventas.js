const {response} = require('express')

//Importación de los modelos
const Ventas = require('../models/ventas')

//Método GET de la API
const ventasGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const ventas = await Ventas.find()

    res.json({  //Respuesta en JSON
        ventas
    })   
}

//Método POST de la api
const ventasPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const ventas = new Ventas(body) //Instanciando el objeto
        await ventas.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const ventasPut = async(req, res = response) => {

    const {usuario,nombre, apellido, correo, telefono} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Ventas.findOneAndUpdate({usuario: usuario}, 
            {nombre:nombre, apellido:apellido,correo:correo, telefono:telefono,})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}


//Modifcación
const ventasDelete = async(req, res = response) => {

    const {_id} = req.query
    let mensaje = ''
    try{
         const ventas = await Ventas.deleteOne ({_id:_id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminacion.'
    }

    res.json({
        msg: mensaje
    })
}


module.exports = {  
    ventasGet,
    ventasPost,
    ventasPut,
    ventasDelete
}