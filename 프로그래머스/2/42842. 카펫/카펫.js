function solution(brown, yellow) {
    var answer = [];
    
    for(let i = 1; i <= yellow; i++){
        if(yellow % i === 0 && yellow / i >= i){
            let width = yellow / i;
            let height = i;
            
            let brownSize = (width + 2) * (height + 2) - yellow;

            if (brown === brownSize) {
                answer.push(width + 2);
                answer.push(height + 2);
            }
        }
    }
    
    return answer
}