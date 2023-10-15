// import { area, testName } from "./sq.js";

// console.log( testName );
// console.log(area(4));

// import sq from "./sq.js";
// console.log(sq.testName);
// console.log(sq.area(4));

import SQUARE from "./sq.js";
import * as rec from "./rec.js";
const sq = new SQUARE();
console.log(sq.area(2));

console.log(rec.shapeName);
console.log(rec.shapeWidth);
console.log(rec.shapeHeight);
console.log(rec.area(3,3));