function solution(number) {
    let answer = 0;
    let sum = 0
    
    for (let i = 0; i < number.length -2; i ++){
         for (let j = i+1; j < number.length-1; j++){
             for (let h = j+1; h < number.length; h++){
                 sum = number[i] + number[j] + number[h]
                 if(sum === 0) answer++
             }
         }
    }
    
    return answer;
}