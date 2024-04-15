function sum(...add){
    let total=0;
    for(const num of add){
        total+=num
    }
    return total
}

console.log(sum(1,2,3,4,5))