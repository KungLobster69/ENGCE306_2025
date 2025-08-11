type Circle = {type:"circle",radius: number};
type Rectangle = {type: "rectangle",widht: number,height: number};
type Shape = Circle | Rectangle;

function createShape(radius: number): Circle;
function createShape(widht: number,height: number): Rectangle;

function createShape(arg1: number,arg2?: number): Shape {
    if (typeof arg2 === 'number'){
        return {type: "rectangle",widht: arg1,height: arg2};
    }else{
        return {type: "circle",radius: arg1};
    }
}

const circle = createShape(10);
const rectangle = createShape(10,20);

console.log(circle);
console.log(rectangle);