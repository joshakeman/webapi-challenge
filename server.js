const express = require('express')

const projectsRouter = require('./data/routers/projectsRouter')
const actionsRouter = require('./data/routers/actionsRouter')

const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.send(`
        <h2>Server is working</h2>
    `)
})

server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)



module.exports = server