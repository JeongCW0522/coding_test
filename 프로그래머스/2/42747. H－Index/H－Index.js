function solution(citations) {
    let n = citations.length;
    let answer = 0;

    for (let h = 0; h <= n; h++) {
        let count = 0;

        for (let j = 0; j < n; j++) {
            if (citations[j] >= h) {
                count++;
            }
        }

        if (count >= h) {
            answer = h;
        }
    }

    return answer;
}