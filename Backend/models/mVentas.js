const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const venta = mongoose.Schema({
  Fecha_Venta: { type: Date, required: true },
  Referencia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  Precio: { type: Number, required: true },
  Descripcion: { type: String },
  Sucursal: { type: String, required: true },
  Vendedor: { type: String, required: true },
});

venta.plugin(uniqueValidator);

module.exports = mongoose.model("Venta", venta);
