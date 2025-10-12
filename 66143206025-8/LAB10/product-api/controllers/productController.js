const Product = require('../models/productModel'); 

// 
const getProducts = async (req, res) => {

    const products = await Product.find({});

    res.status(200).json(products);
};


const createProduct = async (req, res) => {

    const { name, price, quantity } = req.body;

    const product = new Product({ name, price, quantity });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
};

const getProductById = async (req,res) => {

    const product = await Product.findById(req.params.id);
    if (product){
        res.json(product);
    }else{
        res.status(404).json({message: 'Product not found'});
    }
};

const updateProduct = async (req, res) => {
    const {name, price, quantity} = req.body;

    const product = await Product.findById(req.params.id);
    if (product){
        product.name = name || product.name;
        product.price = price || product.price;
        product.quantity = quantity || product.quantity;
        const updateProduct = await product.save();
        res.json(updateProduct);
    }else{
        res.status(404).json({message: 'Product not found'});
    }

};

const deleteProduct = async (req,res) => {
    const product = await Product.findById(req.params.id);
    if (product){
        await product.deleteOne();
        res.json({message: 'Product removed'});
    }else{
        res.status(404).json({message: 'Product not found'});
    }
};

module.exports = { getProducts, createProduct, getProductById, updateProduct, deleteProduct };
