type Circle ={type : "circle", radius: number};
type Rectangle = {type: "rectangle", width: number, height: number};
type Shape = Circle | Rectangle;

// Overlodes Signatures
function createShape(redius:number): Circle;
function createShape(width: number, height: number): Rectangle;

// Implementation   Signature
function createShape(arg1: number, arg2?: number): Circle | Rectangle {
    if (arg2 === undefined) {
        return { type: "circle", radius: arg1 };
    } else {
        return { type: "rectangle", width: arg1, height: arg2 };
    }
    }

const circle = createShape(5);
const rectangle = createShape(10, 20);

console.log(circle);
console.log(rectangle);