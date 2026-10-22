function solution(k, score) {
    let result = [];
    let m = [];
    
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            m.push(score[i]);
        } else if (score[i] > Math.min(...m)) {
            m.sort((a, b) => b - a).pop();
            m.push(score[i]);
        }

        result.push(Math.min(...m));
    }
    
    return result;
}