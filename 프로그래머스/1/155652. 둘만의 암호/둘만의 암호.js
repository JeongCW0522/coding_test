function solution(s, skip, index) {
    let answer = '';
    
    for(let i =0; i<s.length; i++){
        let code = s.charCodeAt(i);
        let count = 0;
        
        for(let j =1; j <= (index + count); j++){
            let n = code + j
            
            if (n > 122){
                code -= 26
            }
            
            let ch = String.fromCharCode(code + j)
            
            if(skip.includes(ch)){
               count ++;
            }
        }
        
        if ((code + index + count) > 122){
            code -= 26
        }
        
        answer += String.fromCharCode(code + index + count);
    }
    
    return answer;
}