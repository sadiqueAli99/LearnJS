// Default param

function user(name="Bot")
{
    return name + ' registerd sucessfully'
}

console.log(user('Noora'))

//rset function

function sum(...numbers){
    let total=0;
    for(const nums of numbers){
        total+=nums
    }
    return total
}

console.log(sum(1,2,3,4))