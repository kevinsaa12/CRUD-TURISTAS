
const Registro = require("../models/Registro");


exports.crearRegistro = async (req, res) => {

    
    try {
        let registro;

        // Creamos nuestro registro
        registro = new Registro(req.body);

        await registro.save();
        res.send(registro);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRegistros = async (req, res) => {

    try {

        const registros = await Registro.find();
        res.json(registros)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarRegistro = async (req, res) => {

    try {
        const { nombre, celular, ciudad, sitio, fecha } = req.body;
        let registro = await Registro.findById(req.params.id);

        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }

        registro.nombre = nombre;
        registro.celular = celular;
        registro.ciudad = ciudad;
        registro.sitio = sitio;
        registro.fecha = fecha;

        registro = await Registro.findOneAndUpdate({ _id: req.params.id },registro, { new: true} )
        res.json(registro);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerRegistro = async (req, res) => {

    try {
        let registro = await Registro.findById(req.params.id);

        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }
       
        res.json(registro);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

    exports.eliminarRegistro = async (req, res) => {

    try {
        let registro = await Registro.findById(req.params.id);

        if(!registro) {
            res.status(404).json({ msg: 'No existe el registro' })
        }
       
        await Registro.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Registro eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
  
}