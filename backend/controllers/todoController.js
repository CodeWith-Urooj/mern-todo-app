import Todo from "../models/todoModel.js";

//Get Todos
export const getTodos=async(req , res)=>{
    try {
        const todos=await Todo.find().sort({createdAt: -1})
        res.status(201).json(todos)
    } catch (error) {
        res.status(404).json({message : "Todos Not Found" } , error.message)
    }
}


//Add Todos

export const addTodo=async(req , res)=>{
    try {
        const {text}=req.body;
        const todo=await Todo.create({text})
        res.status(201).json(todo)
    } catch (error) {
        res.status(404).json({message : "Error in creating todos" } , error.message)
    }
}

//Update Todo
export const updateTodo=async(req , res)=>{
    try {
        const {text}=req.body;
      await Todo.findByIdAndUpdate(req.params.id, { text }, { new: true })
        res.status(201).json({message: "Todo Update Successfully!"})
    } catch (error) {
         res.status(404).json({message : "Error in Updating todo" } , error.message)
    }
}


//Delete Todo
export const deleteTodo=async(req , res)=>{
    try {
      
        const todo=await Todo.findByIdAndDelete(req.params.id)
        res.status(201).json({message:'Todo Delete '})
    } catch (error) {
           res.status(404).json({message : "Error in Deleting todo" } , error.message)
    }
}