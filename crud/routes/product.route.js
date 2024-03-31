const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');
const validateToken = require("../middleware/validateTokenHandler.js");


router.get('/', validateToken, getProducts);
router.get("/:id",validateToken, getProduct);

router.post("/", validateToken, createProduct);

// update a product
router.put("/:id",validateToken, updateProduct);

// delete a product
router.delete("/:id",validateToken, deleteProduct);




module.exports = router;