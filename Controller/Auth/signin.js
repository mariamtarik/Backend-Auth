const userModel = require("../../DB/Model/userModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const signIn=async(req,res)=>{
const{email,password}=req.body;
try {
    let user=await userModel.findOne({email});
    if(!user){
        res.json({message:"Invalid Email"})
    }
    else{
const match=await bcrypt.compare(password,user.password);
if(match){
    const token=jwt.sign({id:user._id,name:user.name,role:user.role},process.env.TOKENSIGNATURE)
    res.json({message:"signin success",token})
}else{
    res.json({message:"invalid email or password"})

}
    }

} catch (err) {
    res.json({message:"failed registerd",...err})
}


}
module.exports=signIn