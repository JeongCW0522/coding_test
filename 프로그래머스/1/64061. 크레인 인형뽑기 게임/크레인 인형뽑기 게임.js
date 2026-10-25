function solution(board, moves) {
    var count = 0;
    let answer = []
    
    for(let i =0; i<moves.length; i++){
        let n = moves[i] - 1
        let k=0
        
        while(k<board.length){
             if (board[k][n] !== 0) {
                 if(answer[answer.length-1] === board[k][n]){
                     answer.pop()
                     count +=2;
                 } else{
                    answer.push(board[k][n]);
                 }
                board[k][n] = 0;
                break;
            }
            k++;
        }
        
    }
    
    return count;
}