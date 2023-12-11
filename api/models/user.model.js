import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    emai:{
    type:String,
    required: true,
    unique:true,
    },
    passowaord:{
    type:String,
    required: true,
    }
},  {timestamps: true });

const User = mongoose.model('User',userSchema);

export default User;