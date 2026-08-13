const mongoose=require("mongoose");

connect_db = async() =>{
    try{
        await mongoose.connect(process.env.MONGOOSE);
        console.log("DataBase Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connect_db