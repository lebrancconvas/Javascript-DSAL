// Create Queue
function Queue() {
    let queue = []
    this.enqueue = function(e) {
        queue.push(e)
    }

    this.dequeue = function() {
        queue.shift()
    }

    this.front = function() {
        return queue[0]
    }

    this.rear = function() {
        return queue[queue.length - 1]
    }

    this.print = function() {
        console.log(queue)
    }

    this.isEmpty = function() {
        return queue.length === 0
    }
}

// Queue Operation
let food = new Queue()
console.log(food.isEmpty())

// Add Element to The Queue
food.enqueue("Soba")
food.enqueue("Sushi")
food.enqueue("Curry")
food.enqueue("Chocolate")
food.enqueue("Soup")
console.log(food.front())
console.log(food.rear())
food.print()

// Remove Element to The Queue
food.dequeue()
food.dequeue()
console.log(food.front())
console.log(food.rear())
food.print()
console.log(food.isEmpty())
