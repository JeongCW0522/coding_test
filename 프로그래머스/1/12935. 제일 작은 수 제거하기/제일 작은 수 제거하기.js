function solution(arr) {
    var answer = [];
    
    answer = arr.filter((v) => v !== Math.min(...arr));
    
    if(answer.length === 0) {
       answer.push(-1)
    }
    
    
    return answer;
}