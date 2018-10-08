// Stack Method
// Push -> Placing Data onto The Stack
// Pop -> Remove Data on the top of The Stack 
// Peek -> Display the top element of The Stack
// Length -> Count How Many element in The Stack

let palindrome = word => {
    let stack = []
    let reverseword = ""
    
    for (let i = 0 ; i < word.length ; i++) {
        stack.push(word[i])
    }
    
    
    for (let i = 0 ; i < word.length ; i++) {
        reverseword += stack.pop()
    }
    
    if (word === reverseword) {
        return `${word} is palindrome`
    }
    else {
        return `${word} is not palindrome`
    }
} 

console.log(palindrome("jabaja"))
console.log(palindrome("jamaj"))
console.log(palindrome("karakee"))
