const Producto = require("../models/mProducts");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  const productosAdd = new Producto({
    fecha: req.body.fecha,
    title: req.body.title,
    color: req.body.color,
    material: req.body.material,
    url: req.body.url,
    n43: req.body.n43,
    n42: req.body.n42,
    n41: req.body.n41,
    n40: req.body.n40,
    n39: req.body.n39,
    n38: req.body.n38,
    n37: req.body.n37,
    n36: req.body.n36,
    n35: req.body.n35,
    n34: req.body.n34,
    n33: req.body.n33,
    n32: req.body.n32,
    n31: req.body.n31,
    n30: req.body.n30,
    n29: req.body.n29,
    n28: req.body.n28,
    n27: req.body.n27,
    n26: req.body.n26,
    n25: req.body.n25,
    n24: req.body.n24,
    n23: req.body.n23,
    n22: req.body.n22,
    n21: req.body.n21,
  });

  productosAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Created satisfied");
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.getProductosDisponibles = (req, res) => {
  Producto.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.deleteProduct = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Producto.findByIdAndDelete(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Deleted");
        }
      );
    } else {
      res.status(404).json("No Encontrado");
    }
  });
};

exports.updateProductById = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      Producto.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        function (err) {
          res.status(200).json("Update");
        }
      );
    } else {
      res.status(404).json("No Update");
    }
  });
};

exports.findProduct = (req, res) => {
  const name = req.params.name;
  Producto.find({ title: { $regex: ".*" + name + ".*" } }).then((products) => {
    res.status(200).json(products);
  });
};
