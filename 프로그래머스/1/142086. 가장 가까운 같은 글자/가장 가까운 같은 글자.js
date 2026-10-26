function solution(s) {
  const answer = [];
  const map = new Map();
    
    for(let i =0; i<s.length; i++){
        let char = s[i]
        
        if(!map.has(char)){
            answer.push(-1)
        } else{
            answer.push(i - map.get(char))
        }
        
        map.set(char, i)
    }

  return answer;
}