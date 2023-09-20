import { Strategy as LocalStrategy } from 'passport-local';
import User from '../Model/auth/user';
import bcrypt from 'bcryptjs';


export default (passport) => {
    passport.use(new LocalStrategy(function(username, password, done){
        User.findOne({username:username},function(err, user){
        if(!user) {
            return done(null, false,{message:'找不到該用戶'});
        }else{
            const isValid = bcrypt.compareSync(password, user.password)
            if(!isValid){
                return done(null, false,{message:'密碼錯誤'})
            }else{
                return done(null, user)
            }
        }
        })
    }))
}

passport.serializeUser(function(user,done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    User.findById(id,function(err,user){
        done(err, user);
    })
})