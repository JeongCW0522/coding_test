function solution(phone_book) {
    let arr = phone_book.sort()
    
    for(let i=0; i < arr.length-1; i++){
        let n= arr[i].length     
        
        if(arr[i] === arr[i+1].slice(0,n)){
            return false
        }
    }
    return true
}