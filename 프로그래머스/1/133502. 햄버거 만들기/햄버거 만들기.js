function solution(ingredient) {
    var complete = [];
    let count = 0
    
    for(let i =0; i<ingredient.length; i++){
        complete.push(ingredient[i])
        
        let n = complete.length
        
        if(n >= 4 && complete[n-4] === 1 && complete[n-3] === 2 && complete[n-2] === 3 && complete[n-1] === 1){
            count++
            complete.splice(n-4, 4)
        }
    }
    
    return count;
}