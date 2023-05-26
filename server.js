const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const routes = require('./routes/todoRoutes.js')

 

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 15000


mongoose.connect(process.env.URI)
.then(()=>console.log('Connected'))
.catch((e)=>console.log(e))


app.use(routes)


app.listen(PORT , ()=>{
    console.log(`Server Running at ${PORT}`)
})