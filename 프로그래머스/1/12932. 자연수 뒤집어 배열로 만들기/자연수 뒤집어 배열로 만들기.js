function solution(n) {
    let arr = String(n).split("")
    let answer =[]
    
    for (let i = 0; i < arr.length; i++) {
        answer.push(Number(arr[i]));
    }
    
    return answer.reverse();
}