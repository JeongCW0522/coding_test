function solution(topping) {
    var count = 0;
    let set = new Set();
    let map = new Map();
    
    for(const k of topping){
        map.set(k, (map.get(k) || 0) + 1);
    }
    
    for (let i = 0; i < topping.length - 1; i++) {
        let t = topping[i];

        set.add(t);
        map.set(t, map.get(t) -1)
        
        if(map.get(t) === 0){
            map.delete(t)
        }

        if (set.size === map.size) {
            count++;
        }
    }
    
    return count;
}