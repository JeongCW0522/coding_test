function solution(n, lost, reserve) {
    var answer = n - lost.length;
    
    lost.sort((a, b) => a - b);

    for (const c of lost) {
        if (reserve.includes(c)) {
            answer++;
            reserve = reserve.filter(v => v !== c);
            lost = lost.filter(v => v !== c);
        }
    }
    
    for(const c of lost){
        if(reserve.includes(c-1)){
            answer++
            reserve = reserve.filter((v) => v !== c-1)
        } else if(reserve.includes(c+1)){
            answer ++
            reserve = reserve.filter((v) => v !== c+1)
        }
    }
    
    
    return answer;
}