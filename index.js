const express = require('express')
const app = express()
const { sequelize} = require('./src/models')
const userRouter = require('./src/routes/user')
const postRouter = require('./src/routes/post')
app.use(express.json())

// routers defining

app.use('/user', userRouter)
app.use('/post', postRouter)

module.exports=app;