const Product = require('../models/productModel');
const getProducts = async (req,res) => {
    const products = await Product.find({});
    res.json(products);
};

const createProduct = async(req,res) => {
    const{name,price,quantity} = req.body;
    const product = new Product({name, price, quantity});
    const createProduct = await product.save();
    res.status(201).json(createProduct);
};

const getProductById = async(req,res) => {
    const product = await Product.findById(req.params.id);
    if (product){
        res.json(product);
    }else{
        res.status(404).json({message:'Product not found'});
    }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.quantity = quantity || product.quantity;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {getProducts, createProduct,getProductById,updateProduct,deleteProduct};
