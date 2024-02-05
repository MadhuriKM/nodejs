/* 
    Node is single threaded, due to single thread -> it handles memory more efficienty.

    multi thread -> 

    cluster modules are created simulteneously handle multiple process/ threads using single process (thread)
*/

// isMaster => this returns true if current process is master (single thread)

const cluster = require('cluster')

if(cluster.isMaster) {
    console.log(`node js running in single thread`)
} else {
    console.log(`no action`)
}