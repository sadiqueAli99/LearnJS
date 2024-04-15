function loginuser(user){

    return `the customer ${user.name} with id ${user.id} logged in`;
}

const dummy={
    id:1,
    name:'sadique'
}

console.log(loginuser(dummy))
console.log(loginuser({id:2,name:'noor'}))