import User from '../Model/auth/user.js'
import bcrypt from 'bcryptjs'
import passport from 'passport';

//Get
export const GetAuth = (req, res) =>{
    res.render ('auth/auth.ejs');
}

export const GetLogin = (req,res) =>{
    res.render ('auth/login.ejs');
}

export const GetRegister = (req,res) =>{
    res.render ('auth/register.ejs');
}

export const GetSuccess = (req,res) =>{
    res.render('auth/success.ejs')
}

//Post
export const PostLogin = async (req,res,next) =>{
    passport.authenticate('local',{         //passport對象通過調用方法authenticate來對用戶身分進行認證
        successRedirect:'/auth/success',
        failureRedirect:'/auth/login'
    })(req,res,next);
}

export const PostRegitser = async (req,res) =>{
    const { name, email, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);    
    const hash = bcrypt.hashSync(password, salt);  //加密内容
    console.log(req.body);

    let newUser = new User({   //指向database
        name:name,
        email:email,
        username:username,
        password:hash,         //加密
        admin: 0
    })
    
    try{
        newUser = await newUser.save()
        res.redirect('/auth/login')
    } catch(error){
        console.log(error);
        res.redirect('/auth/register');
    }
}
