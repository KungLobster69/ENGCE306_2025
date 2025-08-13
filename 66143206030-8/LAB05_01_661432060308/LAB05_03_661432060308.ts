interface Product {
    readonly id : number;
    name : string;
    price : number;
    tags : string[];
    description? : string;
}

const myProduct: Product = {
    id : 111,
    name : "Mouse",
    price : 800,
    tags : ["computer","accessory","wireless"]
};

function displayProduct (product : Product):void{
    console.log(`Product Name: ${product.name},Price: ${product.price} THB`);
}

displayProduct(myProduct);

