
import { Schema , model } from 'mongoose';

const userSchema = new Schema({
    username : {
        type : String,
        require : true,
        unique: true,
        trim: true,
        minlength: 3 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
},{
    timestamps:true,
});

const User = model('User' , userSchema);
export default User;