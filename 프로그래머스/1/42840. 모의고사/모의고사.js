function solution(answers) {
    let answer = [];
    
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let map = new Map([[1, 0], [2, 0], [3, 0]]);
    
    for(let i =0; i<answers.length; i++){
        if (answers[i] === arr1[i % arr1.length]) {
            map.set(1, map.get(1) + 1);
        }

        if (answers[i] === arr2[i % arr2.length]) {
            map.set(2, map.get(2) + 1);
        }

        if (answers[i] === arr3[i % arr3.length]) {
            map.set(3, map.get(3) + 1);
        }
    }
    
    if(map.get(1) > map.get(2) && map.get(1) > map.get(3)){
        answer.push(1)
        return answer
    } else if(map.get(2) > map.get(1) && map.get(2) > map.get(3)){
        answer.push(2)
        return answer
    } else if(map.get(3) > map.get(1) && map.get(3) > map.get(2)){
        answer.push(3)
        return answer
    } else if(map.get(1) === map.get(2) && map.get(1) > map.get(3)){
        answer.push(1)
        answer.push(2)
        return answer
    } else if(map.get(1) === map.get(3) && map.get(1) > map.get(2)){
        answer.push(1)
        answer.push(3)
        return answer
    }else if(map.get(3) === map.get(2) && map.get(1) < map.get(3)){
        answer.push(2)
        answer.push(3)
        return answer
    }else {
        answer.push(1)
        answer.push(2)
        answer.push(3)
        return answer
    }
    

}