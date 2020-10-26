const express = require("express")

const server = express()

server.use(express.json())

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})