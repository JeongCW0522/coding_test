function solution(bridge_length, weight, truck_weights) {
    let keeping = Array(bridge_length).fill(0);
    let currentWeight = 0;
    let count = 0;
    let i = 0;

    for (; i < truck_weights.length || currentWeight > 0; count++) {
        // 1. 다리 맨 앞 트럭 제거
        let out = keeping.shift();
        currentWeight -= out;

        // 2. 다음 트럭이 올라갈 수 있는지 확인
        if (
            i < truck_weights.length &&
            currentWeight + truck_weights[i] <= weight
        ) {
            keeping.push(truck_weights[i]);
            currentWeight += truck_weights[i];
            i++;
        } else {
            keeping.push(0);
        }
    }

    return count;
}