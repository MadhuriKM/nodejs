//events
// custom events
// .on(name,callback) -> define the events bock
// .emit(name) -> invoke the event

const EventEmiter = require('events')
const custom = new EventEmiter()

custom.on('display', () => {
    console.log(`welcome to node events`)
})

custom.emit('display')

custom.on('sum', function(a,b){
    console.log(`sum =`, a + b)
})

custom.emit('sum',10,24)