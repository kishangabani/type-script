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

// class Point{
//     x:number;
//     private y:number;
//     constructor(x?:number,y?:number){
//         this.x=x;
//         this.y=y;
//     }
//     draw(){
//         console.log('X: '+this.x+' Y: '+this.y);
//     }
   
// }

// // Constructor proprty
// class Point{
//     constructor(private _x?:number, private _y?:number){
//     }
//     draw(){
//         console.log('X: '+this._x+' Y: '+this._y);
//     }
//     get x()
//     {
//         return this._x;
//     }
//     set x(value){
//         if(value<0)
//             throw new Error('Value cannot be less than ZERO');
//         this._x=value;
//     }
   
// }
// let point = new Point(1,2);
// let x=point.x;
// point.x=10;

// point.draw();

//modules
import {Point} from './point'
let point = new Point(1,2);
point.draw();