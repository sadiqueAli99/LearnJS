const fruites =new Array('Apple' ,'banana','mango');

console.log(fruites.length)
fruites[3]='yango'
fruites[fruites.length]='peach'
console.log(fruites)

const arr=[25,25,65,85,105,35]

let x

x=arr.includes(105)
console.log(x)
x=arr.reverse()
console.log(x)
x=arr.sort();
console.log(x)
x=arr.slice(1)
console.log(x,arr)
x=arr.push(45)
console.log(arr)
x=arr.splice(2,6)
console.log(x,arr)

const a=1
const b=2
const c=3

d= Array.of(a,b,c)
console.log(d)