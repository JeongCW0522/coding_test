function solution(s) {
    let result = s.length;
    
    for(let j = 1; j <= s.length; j++){
        var answer = '';
        let count = 1;
        
        for(let i =0; i <= s.length; i+=j){   
            const current = s.slice(i, i + j);
            const next = s.slice(i+j, i+j+j)
            
            if(current === next){
                count ++;
            } else {
                answer += (count > 1 ? count : "") + current
                count = 1;
            }
        }  
        
        if(result >= answer.length){
            result = answer.length
        }
    }
    
    return result;
}