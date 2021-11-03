const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {isEmail} = require('validator')
const bcrypt = require('bcrypt');

// Create schema
const UserSchema = new Schema({
	email:{
        type:String,
        unique:true,
        required:[true, "please enter an email"],
        validate:[isEmail, "please enter a valid email address"]
    },
    password:{
        type:String,
        minlength:[6, "enter atleast 6 characters"],
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:[true, "please enter username"]
    },
    goal: {
        type:Number,
        required:true,
    },
    workspace: {
      type:Number,
      required:true,
    }
});

UserSchema.pre('save', async function(next){
if(!this.isModified("password")){
    next();
}
const salt = await bcrypt.genSalt(10);
this.password= await bcrypt.hash(this.password, salt)
})

// Method to check if the credentials are correct(Login Method either by username or email)
UserSchema.statics.findByCredentials = async (email, password, username) => {
  let user;  
  const userByEmail = await User.findOne({ email });
  
    if (!userByEmail) {
     user = await User.findOne({ username });
    }
    else{
        user = userByEmail
    }

    if (!user) {
        throw new Error("Try again credentials don't match");
      }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      throw new Error("Incorrect password");
    }
  
    return user;
  };

  const User = mongoose.model("user", UserSchema);
  module.exports = User;
