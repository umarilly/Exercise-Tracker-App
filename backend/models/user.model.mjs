
import { Schema , model } from 'mongoose';

const userSchema = new Schema({
    username : {
        type : String,
        require : true,
        unique: true,
        trim: true,
        minlength: 3 
    },
},{
    timestamps:true,
});

const User = model('User' , userSchema);
export default User;