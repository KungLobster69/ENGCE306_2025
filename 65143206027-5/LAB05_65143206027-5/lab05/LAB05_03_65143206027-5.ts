interface product {
    readonly id: number;
    name: string;
    price: number;
    tags: string[];
    description?: string

}
const myproduct: product = {
    id: 275, 
    name: "Dung", 
    price:100, 
    tags:["ok"], 
    description:"lol"
}

function displayProduct (product: product): void {
    console.log(`product name: ${product.name}, price: ${product.price} THB `)
}