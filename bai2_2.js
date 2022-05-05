function numberOfItems(arr, item) {
    let count = 0;
    // Write the code that goes here
    function DeQuy(arr, item){
        for(let i = 0; i < arr.length; i++){
            if(arr[i]===item&&!isOb(arr[i])){
                count++;
            }
            if(isOb(arr[i])){
                DeQuy(arr[i],item);
            }
        }
    }
    DeQuy(arr,item);
    return count;
}
function isOb(obj){
    return obj != null && typeof obj === 'object';
}
var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));