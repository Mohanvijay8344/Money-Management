const express = require('express');
const cors = require('cors');
const app = express();
const { db }  = require('./Db/Database.js')
const {readdirSync} = require('fs')



require('dotenv').config() 

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.get('/', (req,res) => {
    res.send("Hello World")
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log("Your PORT is:", PORT)
    })
}
server();