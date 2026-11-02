function solution(order) {
    let container = [];
    let count = 0;
    let box = 1;

    for (let i = 0; i < order.length; i++) {
        while (box < order[i]) {
            container.push(box);
            box++;
        }

        if (box === order[i]) {
            count++;
            box++;
        } else if (container[container.length - 1] === order[i]) {
            container.pop();
            count++;
        } else {
            break;
        }
    }

    return count;
}