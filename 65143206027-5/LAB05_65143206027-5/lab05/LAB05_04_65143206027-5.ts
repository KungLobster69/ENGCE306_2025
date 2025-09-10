type circle = { type: "circle", radius: number} ;
type rectangle = { type: "reactangle", width: number, height: number};
type shape = circle | rectangle;

function overloads