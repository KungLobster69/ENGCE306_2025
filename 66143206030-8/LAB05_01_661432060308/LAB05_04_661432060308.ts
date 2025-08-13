type Circle = {type: "circle" , radius: number;}
type Rectangle = {type: "rectangle" , width: "number" , height: number}
type Shape = Circle | Rectangle

function createShape (radius: number): Circle;
function createShape (width: number , height: number): Rectangle;

