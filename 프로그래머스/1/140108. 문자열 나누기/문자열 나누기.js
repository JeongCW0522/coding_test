function solution(s) {
    let count = 1;
    let x = s[0];
    let notX = '';

    for (let i = 1; i < s.length; i++) {
        if (x === '' || x[0] === s[i]) {
            x += s[i];
        } else {
            notX += s[i];
        }

        if (x.length === notX.length) {
            if (i < s.length - 1) {
                count++;
            }

            x = '';
            notX = '';
        }
    }

    return count;
}