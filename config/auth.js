const isUser = function(req,res,next) {
    if (req.isAuthenticated()){
        next()
    }else{
        req.flash('警告','請登入')
        res.redirect('/auth/login')
    }
}

const isAdmin = function(req,res,next) {
    if (req.isAuthenticated() && res.locals.user.admin == 2) {
        next()
    }else{
        req.flash('警告','請用管理員帳號登入')
        req.redirect('/auth/login')
    }
}

const isSeller = function(req,res,next) {
    if (req.isAuthenticated() && res.locals.user.admin == 1) {
        next()
    }else{
        req.flash('警告','請用商家號登入')
        req.redirect('/auth/login')
    }
}

export default admin;