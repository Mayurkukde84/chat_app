require('dotenv').config()
const express = require('express')
const app = express()
PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send('This is form backend')
})
app.listen(PORT,()=>{
    console.log(`server is connected on port ${PORT}`)
})