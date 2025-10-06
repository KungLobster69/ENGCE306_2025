const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); 
connectDB(); 

const app = express(); 
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get('/', (req, res) => res.send('API is running...'));

app.use('/api/products',productRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

