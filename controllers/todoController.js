const ToDoModel = require('../models/todoModel.js')

  module.exports.getTodo = async(req,res)=>{
    const toDo = await ToDoModel.find().sort({createdAt:-1})

   res.send(toDo)
}

module.exports.saveTodo = (req,res)=>{

const {text} = req.body;

 ToDoModel.create({text})
.then((data)=>{
    console.log("Added succesfully")
    console.log(data)
    res.send(data)
})
.catch((err) => console.log(err));

}


module.exports.updateTodo = (req,res)=>{
    const {_id,text} = req.body
     ToDoModel
    .findByIdAndUpdate(_id,{ text })
    .then(()=>res.send("Updated Succefully"))
    .catch((e)=>console.log(e))
   
  
}

module.exports.deleteTodo = (req,res)=>{
    const {_id} = req.body
     ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Succefully"))
    .catch((e)=>console.log(e))
   
  
}
