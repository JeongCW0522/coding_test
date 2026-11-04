function solution(bridge_length, weight, truck_weights) {
    let keeping = Array(bridge_length).fill(0);
    let currentWeight = 0;
    let count = 0;
    let i = 0;

    for (; i < truck_weights.length || currentWeight > 0; count++) {
        let out = keeping.shift();
        currentWeight -= out;

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