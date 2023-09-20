import mongoose from 'mongoose';

//用戶
const UserSchema = new mongoose.Schema({
    //名字
    name:{
        type:String,
        required:true,  //必須填寫該字段
    },
    //郵箱
    email: {
        type: String,
        required: true,
        trim:true,
    },
    //用戶ID
    username:{
        type:String,
        required: true,
        unique:true,  //字段是否唯一
    },
    //密碼
    password:{
        type:String,
        required: true,
    },
    //isadmin權限等級 0普通 1商家 2管理員
    isAdmin:{
        type:Boolean,
        default:false,
    },
    creatAt:{
        type:Date,
        default:Date.now(),
    }
});

const User = mongoose.model('User', UserSchema);   //collection >DB名 自動小寫+s

export default User;