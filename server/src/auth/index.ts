import express from 'express';
import session from 'express-session';
const passport = require('passport');
// import passport from 'passport';
export const loginRouter = express.Router();

const app = express();
const initializePassport = require('../auth/passportConfig');
initializePassport(passport);

app.use(session({
    secret: 'hippopotamus',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

loginRouter.get('/', checkNotAuthenticated, (request, response) => {
    try{
        response.render("login");
    }catch (err){
        response.sendStatus(500);
        console.log(err);
        return;
    }
})

loginRouter.post('/', checkNotAuthenticated, passport.authenticate('local',{
    successRedirect: '/portal',
    failureRedirect: '/',
    failureFlash: true
}));

export function checkAuthenticated(request,response,next){
    if(request.isAuthenticated()){
        return next()
    }
    response.redirect('/')
}

export function checkNotAuthenticated(request,response,next){
    if(request.isAuthenticated()){
        return response.redirect('/portal');
    }
    next()
}