function findShortest(vectors) {
    // Write the code that goes here
    let result = [];
    let modules =  vectors.map((vector) => {
        if(vector.length === 3){
            let module = 0;
            vector.forEach((arr)=>{
                module += arr**2
            });
            return module = Math.sqrt(module);
        }
    });
    modules.forEach((module,index)=>{
        if(module === Math.min(...modules)){
            // result.push(vectors[index]);
            result = vectors[index];
        }
    })
    return result;
}
  
var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
var shortest = findShortest(vectors);
console.log(shortest);