const post={
    id:1,
    title:"this is jason",
    body:"this is body"
}

const str=JSON.stringify(post); // coverting object to json format
console.log(str)

const obj =JSON.parse(str) // parsing back to object
console.log(obj)