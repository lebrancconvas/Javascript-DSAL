function Stack() {
    // Count the element of The Stack
    this.count = 0
    // Array for Store The Stack
    this.storage = {}

    // Push -> Add The Value of The end of The Stack.
    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }

    // Pop -> Remove The Value of The last of The Stack.
    this.pop = function() {
        if (this.count === 0) {
            return undefined
        }
        
        this.count--
        
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    // Size -> Return the length of The Stack.
    this.size = function() {
        return this.count
    }

    // peek -> Return the value at the last of The Stack.
    this.peek = function() {
        return this.storage[this.count - 1]
    }
}

var WebStack = new Stack()
WebStack.push("HTML")
WebStack.push("CSS")
console.log(WebStack.peek)