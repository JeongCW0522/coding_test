function solution(survey, choices) {
    var answer = '';
    let map = new Map();
    
    let arr = ["RT", "CF", "JM", "AN"];
    
    for(let i =0; i < choices.length; i++){
        let ch =''
        
        if(choices[i] === 1){
            ch = survey[i][0]
            map.set(ch, (map.get(ch) ?? 0) + 3)
        } else if(choices[i] === 2){
            ch = survey[i][0]
            map.set(ch, (map.get(ch) ?? 0) + 2)
        } else if(choices[i] === 3){
            ch = survey[i][0]
            map.set(ch, (map.get(ch) ?? 0) + 1)
        } else if(choices[i] === 5){
            ch = survey[i][1]
            map.set(ch, (map.get(ch) ?? 0) + 1)
        } else if(choices[i] === 6){
            ch = survey[i][1]
            map.set(ch, (map.get(ch) ?? 0) + 2)
        } else if(choices[i] === 7){
            ch = survey[i][1]
            map.set(ch, (map.get(ch) ?? 0) + 3)
        } else continue
    }
    
    for(let i =0; i < arr.length; i++){
        let a = map.get(arr[i][0]) ?? 0
        let b = map.get(arr[i][1]) ?? 0
        
        if(a > b){
            answer += arr[i][0]
        } else if(a < b){
            answer += arr[i][1]
        } else answer += arr[i][0]
    }
    
    return answer;
}