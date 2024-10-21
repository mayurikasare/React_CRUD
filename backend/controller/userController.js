//contain all api

import User from "../model/UserModel.js";
// 1st create api post data

export const create= async(req,res)=>{
    try {
        const userData=new User(req.body);
         if(!userData){
            return res.status(404).json({msg:"User data not found"});
         }
         //save data
         const savedData=await userData.save();
         res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({error:error})
    }
}

// 2nd for fetch data
export const getAll=async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData){
           return res.status(404).json({msg:"User data not found"})

        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({json:error})
    }
}

//3rd]     get single data on the basis of id

export const getOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id)

        if(!userExist){
            return res.status(404).json({msg:"User not found"});

        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

// 4th] for update the data

export const update=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found"});
        }
        const updateData=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:"User update successfully"});
    } catch (error) {
        res.status(500).json({error:error})
    }
}
    // 5] for delete data
    
    export const deleteOne=async(req,res)=>{
        try {
            const id=req.params.id;
            const userExist=await User.findById(id);
            if(!userExist){
                return res.status(404).json({msg:"User not exist"})

            }
            await User.findByIdAndDelete(id)
            res.status(200).json({msg:"User delete Succesfully"});

        } catch (error) {
            res.status(500).josn({error:error})
        }
    }