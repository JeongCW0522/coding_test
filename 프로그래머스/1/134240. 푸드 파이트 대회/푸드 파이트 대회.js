function solution(food) {
    var answer = [];
        
    // i는 1부터 시작
    // 1. 배열에 넣기
    // 2. 절반 넣고 0 넣기
    // 3. 0 이전까지를 reverse 해서 뒤에 넣기
    // 4. 문자열로 바꾸기
    
    for(let i=1; i<food.length; i++){
        let n = food[i]
        let s = Math.floor(n/2)
        
        for(let j =0; j<s; j++){
            answer.push(i)
        }
    }
    
    let a = [...answer].reverse().join("")
    
    answer.push(0)
    answer.push(a)
    
    return answer.join('');
}