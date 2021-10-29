var express = require("express");
const router = express.Router();

const ProductController = require("../controllers/cProducts");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/:id", ProductController.getProductId);
router.get("/:name", ProductController.findProduct);
router.patch("/:id", ProductController.updateProductById);

module.exports = router;
