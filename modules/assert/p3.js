const assert = require('assert')

const x = {
    name: "john"
}

const y = [
    {
        name: "david"
    }
]

const z = [
    {
        name: "david"
    }
]

// notDeepStrictEqual => validates type, structure, prop and values
assert.notDeepStrictEqual(y,z)