function Set() {
    let collection = []

    this.has = function(element) {
        return collection.indexOf(element) !== -1 
    }

    this.values = function() {
        return collection
    }

    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element)
            return true
        }
        return false
    }

    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index,1)
            return true
        }
        return false
    }

    this.size = function() {
        return collection.length
    }

    this.union = function(otherset) {
        let unionset = new Set()
        let firstset = this.values
        // let secondset
    }
}