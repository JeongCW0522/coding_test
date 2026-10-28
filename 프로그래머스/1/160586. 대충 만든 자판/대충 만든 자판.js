function solution(keymap, targets) {
    let map = new Map();
    let answer = [];

    for (let key of keymap) {
        for (let i = 0; i < key.length; i++) {
            let char = key[i];
            let count = i + 1;

            if (!map.has(char) || map.get(char) > count) {
                map.set(char, count);
            }
        }
    }

    for (let target of targets) {
        let sum = 0;

        for (let char of target) {
            if (!map.has(char)) {
                sum = -1;
                break;
            }

            sum += map.get(char);
        }

        answer.push(sum);
    }

    return answer;
}