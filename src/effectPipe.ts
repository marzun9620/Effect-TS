import {pipe} from "effect"
const a = (x:number) => x+1;
const b = (x:number) => x*2;
const c = (x:number) => x-3;
const d = (x:number) => x/4;
const e = (x:number) => x%5;

const result = pipe(5,a,b,c,d,e)

console.log(result)