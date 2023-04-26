const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const registerSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    passwordConfirm:{
        type:String,
        required:true,
        select:false
    },
    image:{
        type:String,
     
    }
},{
    timestamps:true
})


registerSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined
    next()
})

module.exports = mongoose.model('Register',registerSchema)