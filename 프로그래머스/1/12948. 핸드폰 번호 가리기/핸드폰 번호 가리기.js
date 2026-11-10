function solution(phone_number) {
    var answer = '';
    
    let len = phone_number.length - 4
    
    answer = '*'.repeat(len)
    answer += phone_number.slice(phone_number.length - 4, phone_number.length)
    
    return answer;
}