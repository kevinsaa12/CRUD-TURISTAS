const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    }, 
    sitio: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    
    }
});

module.exports = mongoose.model('Registro', RegistroSchema);