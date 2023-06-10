const Task = require("../models/tasks")
const asyncHandler = require("express-async-handler")

const getAllTasks = async (req,res)=>{
    const tasks = await Task.find()
    res.status(200).send({tasks})
}

const postSingleTask = asyncHandler(async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).send({task})
})

const getSingleTask = asyncHandler(async (req,res)=>{
    const task = await Task.findById(req.params.id)
    if(task){
        res.status(200).send({task})
    } else {
        res.status(404).send({msg:"Task Not found"})
    }
})

const patchSingleTask = asyncHandler(async (req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(task){ 
        res.status(200).send({task})
    } else{
        res.status(404).send({
            msg:"Task Not Found"
        })
    }
})

const deleteSingleTask = asyncHandler(async(req,res)=>{
    const task = await Task.findByIdAndDelete(req.params.id)
    if(task){
        res.status(200).send({
            msg:"Task Deleted Successfully"
        })
    } else {
        res.status(404).send({
            msg:"Task Not Found"
        })
    }
})

module.exports = {getAllTasks,postSingleTask,getSingleTask,patchSingleTask,deleteSingleTask}