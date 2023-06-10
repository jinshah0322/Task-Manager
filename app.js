require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const tasks = require("./routes/tasks")
const connectDB = require("./db/connectDB")
const {notFound,errorHandler} = require("./middlewares/errorHandler")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/api/v1/tasks",tasks)

app.use(notFound)
app.use(errorHandler)

const start = async ()=>{
    await connectDB(process.env.MONGO_URL)
    app.listen(process.env.PORT,()=>{
        console.log(`Server started on port ${process.env.PORT}`);
    })
}

start()