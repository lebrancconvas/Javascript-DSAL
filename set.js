function mySet() {
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
        let firstset = this.values()
        let secondset = otherset.values()
        firstset.forEach(function(e) {
            unionset.add(e)
        })
        secondset.forEach(function(e) {
            unionset.add(e)
        })
        return unionset
    }

    this.interception = function(otherset) {
        let interceptionset = new Set()
        let firstset = this.values()
        let secondset = otherset.values()
        firstset.forEach(function(e) {
            if(otherset.has(e)) {
                interceptionset.add(e)
            }
        })
        return interceptionset
    }
}

// create new object as a new set.
let giftriddha = new mySet()
let oneriddha = new mySet()

// Add Element on the first set.
giftriddha.add("Pun")
giftriddha.add("Pang")
giftriddha.add("Ohm")
giftriddha.add("Namtan")
giftriddha.add("Wave")
giftriddha.add("Claire")
giftriddha.add("Korn")
giftriddha.add("Mon")

// Add Element on the second set.
oneriddha.add("Namtan")
oneriddha.add("Pun")
oneriddha.add("Wave")
oneriddha.add("Nack")

// Display the union set of the first set and the second set.
console.log(giftriddha.union(oneriddha))
console.log(giftriddha.interception(oneriddha))
