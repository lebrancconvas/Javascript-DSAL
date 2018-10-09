function Queue() {
    let queue = []
    this.enqueue = function(e) {
        queue.push(e)
    }

    this.dequeue = function(e) {
        queue.shift()
    }
}