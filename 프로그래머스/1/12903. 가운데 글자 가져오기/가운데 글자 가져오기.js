function solution(s) {
    let mid =Math.ceil(s.length / 2)
    
    if(s.length % 2 === 0){
        return s[mid-1] + s[mid]
    } else {
        return s[mid-1]
    }
}