const Task = require("../models/tasks")
require("express-async-errors")

const getAllTasks = async (req,res)=>{
    const tasks = await Task.find()
    res.status(200).send({tasks})
}

const postSingleTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).send({task})
}

const getSingleTask = async (req,res)=>{
    const task = await Task.findById(req.params.id)
    if(task){
        res.status(200).send({task})
    } else {
        res.status(404).send({msg:"Task Not found"})
    }
}

const patchSingleTask = async (req,res)=>{
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
}

const deleteSingleTask = async(req,res)=>{
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
}

module.exports = {getAllTasks,postSingleTask,getSingleTask,patchSingleTask,deleteSingleTask}