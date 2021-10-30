const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const producto = mongoose.Schema({
  fecha: { type: Date },
  title: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  material: { type: String, required: true },
  url: { type: String },
  n43: { type: Number },
  n42: { type: Number },
  n41: { type: Number },
  n40: { type: Number },
  n39: { type: Number },
  n38: { type: Number },
  n37: { type: Number },
  n36: { type: Number },
  n35: { type: Number },
  n34: { type: Number },
  n33: { type: Number },
  n32: { type: Number },
  n31: { type: Number },
  n30: { type: Number },
  n29: { type: Number },
  n28: { type: Number },
  n27: { type: Number },
  n26: { type: Number },
  n25: { type: Number },
  n24: { type: Number },
  n23: { type: Number },
  n22: { type: Number },
  n21: { type: Number },
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);
