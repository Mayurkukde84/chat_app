const Register = require("../Models/authModels");
const asyncHandler = require("express-async-handler");
const formidable = require("formidable");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");
const sharp = require("sharp");
const multerStorage = multer.diskStorage({destination:(req,file,cb)=>{
  cb(null,'public/img')
},

filename:(req,file,cb)=>{
  const uniqueName = `${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`
  cb(null,uniqueName)
}
})

const upload = multer({
  storage:multerStorage,
  limit:{fileSize:100000 * 100} 
})

let uploadPhoto = upload.single('image')
const userRegister = asyncHandler(async (req, res) => {
 console.log(req.body)

  uploadPhoto(req, res, async (err) => {
    const {userName,email,password,passwordConfirm} = req.body
if(!userName || !email || !password || !passwordConfirm){
  return res.status(201).json({message:'All field is required'})
}

const duplicateEmail = await Register.findOne({email}).exec()
if(duplicateEmail){
  return res.status(201).json({message:"already registered email please use another email address"})
}
    console.log(req.file);
   
    if (err) {
      return res.status(500).send({ err: err.message });
    }

    if (!req.file) {
      return res.status(401).json({ message: "please upload file" });
    }
    const file = new Register({
      image: req.file.filename,
      userName:req.body.userName,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm
    });

    const response = await file.save();
    

    const token = jwt.sign({ id: file._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  
    const cookieOptions = {
      expiresIn: new Date(
        Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: true,
    };
    res.cookie("jwt", token, cookieOptions);

  
  
    res.status(200).json({
      status: "success",
      token,
      data: {
        file
      },
    });
  });

 
});

module.exports = { userRegister, uploadPhoto };
