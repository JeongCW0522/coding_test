function solution(sequence, k) {
    var answer = [];
    
    let left = 0;
    let right = 0;
    let sum = 0;
    let min = Infinity;
    
    while(left < sequence.length){
        if(sum === k){
             if (right - left < min) {
                 min = right - left
                 answer = [left, right - 1];
             }
            sum -= sequence[left];
            left++;
           
        } else if(sum < k && right < sequence.length){
            sum += sequence[right]
            right ++
        } else {
            sum -= sequence[left]
            left ++
        }
    }
    
    return answer;
}