const net = require('net')

// client
const client= net.connect({ port: 35536}, () =>{
    console.log(`connected to server`)
})

// data event
client.on('data', (output)=> {
    console.log(`output =`, output.toString())
})

// end event => to stop the server
client.on('end', ()=> {
    console.log(`server disconnected`)
})


// Net uses ipv6