enum ProductStatus{
    Available = 0,
    OutOfStack = 1,
    Discontinued = 2
}

const productStatus : ProductStatus = ProductStatus.Available;
const productData : [number,string,number] = [101,"Gaming Mouse",1499.99];
let productNotes : unknown = "This is a best-selling itme.";

function displayProduct(data : [number,string,number]): void {
    console.log('Product ID: ${data[0]},Name: ${data[1]},Price: ${data[2]}');
}

function logNotes(notes: unknown): void{
    if (typeof notes === 'string'){
        console.log('Notes: ${notes.toUpperCase()}');
    }
}

if (productStatus === ProductStatus.Available){
    displayProduct(productData);
    logNotes(productNotes);
}