
const userModel = require('../model/UserModel')




 const createPost = async (req,res,next) => {
    try{
        const user = new userModel(req.body);
        user.save();
        res.status(201).send('User created successfully');
    }
    catch(err){
        res.status(500).json(err)
    }
    

}




 const updateUser = async (req,res,next) =>{
    try{
     const user= await userModel.findByIdAndUpdate(req.params.id ,req.body,{new:true})
        if(!user){
            return res.status(404).json({message : " No blogs found"});
        }
       
      return  res.status(200).json('update successfully');
    }
    catch(err){
        res.status(500).json(err);
    }
}



 const deleteUser = async (req,res,next) =>{
    try{
        await userModel.findByIdAndDelete(req.params.id)
        
        res.status(200).json("delete item successfully")

    }
    catch(err){
        res.status(500).json(err)
    }
}



 const getAllList = async (req,res,next) =>{
    try{
   const users = await userModel.find()
   res.status(200).json(users)
    // res.status(200).json("get all list is successfully")
    
    }
    catch(err){
        res.status(500).json(err)
    }
}


 const getbyid = async (req,res,next) =>{

    try{
      const users = await userModel.findById(req.params.id)
            
        res.status(200).json(users)
    }

    catch(err){
        res.status(500).json(err)
    }

}
module.exports ={getbyid,getAllList,deleteUser,updateUser,createPost};


