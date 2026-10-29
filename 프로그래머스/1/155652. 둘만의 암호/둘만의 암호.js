function solution(s, skip, index) {
    // a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
    // a=97, z = 123
    
    // 1. s[0]의 1 ~ index까지의 알파벳을 배열에 저장
    // 2. 이 배열에 저장된 값 중 skip안에 있으면 그 수만큼 제거 후 다음 알파벳 추가
    
    let answer = '';
    
    for(let i =0; i<s.length; i++){
        let code = s.charCodeAt(i);
        let count = 0;
        
        for(let j =1; j <= (index + count); j++){
            let ch = String.fromCharCode(code + j)
            
            if (ch > 'z'){
                code -= 26
                ch = String.fromCharCode(code + j)
            }
            
            if(skip.includes(ch)){
               count ++;
            }
            
        }
        
        if ((code + index + count) > 123){
            code -= 26
        }
        
        answer += String.fromCharCode(code + index + count);
    }
    
    return answer;
}