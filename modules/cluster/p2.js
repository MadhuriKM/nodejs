//isWorker => this method is true if current process is worker (child)

const cluster = require('cluster')

if(cluster.isWorker) {
    console.log(`new thread is running`)
} else {
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}

// fork() => is used to spam a new worker process