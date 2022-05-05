function findAllHobbyists(hobby, hobbies) {
    let keys = Object.keys(hobbies);
    let result = [];
    for(let key of keys){
        hobbies[key].forEach((arr) => {
            if(arr === hobby){
                result.push(key);
            }
        });
    }
    return result;
}
  
var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};
  
console.log(findAllHobbyists('Yoga', hobbies));
