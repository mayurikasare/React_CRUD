import express from "express";
import { create ,getAll, getOne,update,deleteOne} from "../controller/userController.js";
const route=express.Router();  //initialize router


route.post("/create",create) //for post

route.get("/getall",getAll); //for 0get data 

// get single data on the basis of id
route.get("/getone/:id",getOne)
 
//for update
route.put("/update/:id",update);

//for delete data
route.delete("/delete/:id",deleteOne)
export default route;