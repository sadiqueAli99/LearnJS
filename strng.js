let s='sadique'

console.log(s.length)

s=s.__proto__;
console.log(s,typeof s)

let e='sadique'

mynewString=e.charAt(0).toUpperCase()+e.substring(1)
console.log(mynewString)