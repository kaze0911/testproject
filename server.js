import express from 'express';
import methodeOverride from 'method-override';
import mongoose from 'mongoose';
import flash from 'connect-flash';
import bodyParser from 'body-parser';
// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import expressValidator from 'express-validator';
import messages from 'express-messages';

const app = express();

//連結mongoose
mongoose.connect('mongodb://localhost:27017/GuanDB',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true},
    console.log("connect to mongodb"))        //端口/blog目錄名

//setup path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//初始化body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Session Middleware
app.use(session({
    secret:'keyboard cat',
    resave:true,
    saveUninitialized:true,
}));

app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
                , root = namespace.shift()
                , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

//Massages Middleware
app.use(flash());
app.use(function(req,res,next){
    res.locals.messages = messages(req,res);
    next();
})

// //Passport Config
// import passport from './config/passport.js';

// //Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// //建立Verify Callback 建立認證機制
// passport.serializeUser(function(user, done){
//     done(null, user);
// })
// passport.deserializeUser(function(user, done){
//     done(null, user);
// })    

// //Middleware
// passport.use(new LocalStrategy({
//     passReqToCallback: true,        //讓Verify Callback可以取得req物件
// },function(username, password, done){    
//     User.findOne({username:username},function(err, user){  //通過mongodb查找使用者信息
//         if(err){return done(err)}   //如果服務器端顯示錯誤，提供passp錯誤訊息
//         if(!user){return done(null, false)}  //如果沒有在數據庫找到該使用者，不提供passport任何使用者訊息
//         if(user.password != password){return done(null, false)}  //如果在數據庫找找到使用者，但密碼錯誤，不提供passport任何使用者訊息
//         return done(null, user)  //如果帳號密碼都正確提供passport使用者訊息
//     })
// }))


//Template engine
app.set("view engine","ejs");
app.set('views',path.join(__dirname,'views'));

//Middleware
app.use(express.json());
app.use(methodeOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


//Routes
import IndexRoutes from './Routes/index.js';
import ProductRoutes from './Routes/product.js';
import ServiceRoutes from './Routes/service.js';
import CourseRoutes from './Routes/course.js';
import BlogRoutes from './Routes/blog.js';
import AboutRoutes from './Routes/about.js';
import AuthRoutes from './Routes/auth.js';
import AdminRoutes from './admin/Routes/admin.js';
import AdminBlog from './admin/Routes/blog.js';
import AdminProduct from './admin/Routes/product.js'

//主頁
app.use('/', IndexRoutes);
//產品
app.use('/product', ProductRoutes);
//服務種類
app.use('/service', ServiceRoutes);
//課程
app.use('/course', CourseRoutes);
//Blog活動
app.use('/blog', BlogRoutes);
//關於我們
app.use('/about', AboutRoutes);
//登入註冊
app.use('/auth', AuthRoutes);
//管理員
app.use('/admin',AdminRoutes);
app.use('/admin/A_blog',AdminBlog);
app.use('/admin/A_product',AdminProduct);


//port
app.listen(3000, ()=>{
    console.log("server is running")
})