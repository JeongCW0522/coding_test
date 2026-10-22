function solution(s) {
  const answer = [];
  const lastIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!lastIndex.has(char)) {
      answer.push(-1);
    } else {
      answer.push(i - lastIndex.get(char));
    }

    lastIndex.set(char, i);
  }

  return answer;
}