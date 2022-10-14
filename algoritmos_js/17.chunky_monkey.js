/*****************Chunky Monkey*********************
Write a function that splits an array (first argument) into groups the length of 
size (second argument) and returns them as a two-dimensional array*/

function chunkArrayInGroups(arr, size) {
    let newArr=[]; 
    while(arr.length > size){
      newArr.push(arr.splice(0,size))
    }
    if (arr.length){
    newArr.push(arr); 
        return newArr
    }
}
    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));