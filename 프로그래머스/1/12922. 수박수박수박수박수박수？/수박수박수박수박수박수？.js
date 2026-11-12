function solution(n) {
    let answer = '';
    let a = '수박';
    let b = '수';
    
    if(n % 2 === 0){
        answer = a.repeat(n/2)
    } else {
        answer = a.repeat(n/2) + b
    }
    
    return answer;
}