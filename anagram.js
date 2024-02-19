function checkAnagram(firstString,secondString){
    return firstString.split(" ").sort().join("")===secondString.split(" ").sort().join("");  
}

console.log(checkAnagram('sadique','Sadique '))