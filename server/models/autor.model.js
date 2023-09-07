const mongoose = require("mongoose");

const EsquemaAutor = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
        //estas son validaciones el nuevo tema
    },
    imagen: {
        type: String
    },
    libros:{
        type: Boolean,
        default: false
    },
    cuentos:{
        type: Boolean,
        default: false
    },
    articulos:{
        type: Boolean,
        default: false
    },
}, {timestamps: true, versionKey: false});
//timestamps: me crea campos de createAt y updateAt
//versionKey: false me elimina el atributo __v

const Autor = mongoose.model("autores", EsquemaAutor);

module.exports = Autor;