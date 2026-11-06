function solution(want, number, discount) {
    let answer = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        let a = 1
        let map = new Map();

        for (let j = 0; j < want.length; j++) {
            map.set(want[j], number[j]);
        }

        for (let j = i; j < i + 10; j++) {
            let product = discount[j];

            if (map.has(product)) {
                map.set(product, map.get(product) - 1);
            }
        }

        for (const count of map.values()) {
            if (count !== 0) {
                a = 0
                break;
            }
        }
        
        if(a) answer++
    }

    return answer;
}