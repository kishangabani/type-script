// function dosomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally ' + i);
// }
// dosomething();
// let count=5;
// count='a';
// let a:number;
// let c:string;
// let b:boolean;
// let d:any;
// let e:number[]=[1,2,3,4,5];
// let f:any[]=[1,2,3,'a',true];
// const colorRed=0;
// const colorBlue=1;
// const colorGreen=2; 
// enum color{red=0,blue=1,green=2,pink=3};
// let backgroundColor= color.blue;
// let msg;
// msg='abc';
// let endsWithC= (<string>msg).endsWith('c');
// let alternativeway= (msg as string).endsWith('c'); 
// let log= function(msg)
// {
//     console.log(msg);
// }
// // functions
// let dolog= (msg) =>{
//     console.log(msg);
// }
// //functions
// let dolog= (msg) => console.log(msg);
// interface Point{
//     x:number,
//     y:number,
//     draw: () => void
// }
// class Point{
//     x:number;
//     y:number;
//     draw(){
//         console.log('X: '+this.x+' Y: '+this.y);
//     }
//     getDistance(another:Point){
//     }
// }
// let drawpoint =(point: Point) =>{
// //...
// }
// let getDistance=(pointA:Point, pointB:Point) =>{
//     //......
// }
// drawpoint({
//     x:1,
//     y:2
// })
// let point:Point = new Point();  // means  
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point(1, 2);
point.x = 3;
point.draw();
