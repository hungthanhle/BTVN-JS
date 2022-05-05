function filterNumbersFromArray(array) {
    return array.filter((arr) => {
        if(Number.isFinite(arr)){
            console.log(arr);
            return arr;
        }
    });
}
  
var arr = [1, 'a', 'b', 2];
arr = filterNumbersFromArray(arr);
// At this point, arr should have been modified in place
// and contain only 1 and 2.
console.log(arr);
  