const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';
import * as employeeService from '../services/employee.service';
import * as managerService from '../services/manager.service';
import path from 'path';
import express from 'express';

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
let user;
let role;
let pass;

async function initialize(passport,){
    const authenticateUser = async (email,password,done) =>{
        console.log(user, "Arrived at user log");
        user =  await employeeService.getUser(email);
        console.log(user, "Arrived after log should not be undefined");
        pass = user.map(e => e.password);
        role = user.map(e => e.roleId);
        console.log(role)
        if(user.length == 0){
            return done(null, false, { message: "User Does Not Exist"} )
        }
        try{
            if( await bcrypt.compare(password, pass.toString())){
                return done(null,user)
            }else{
                return done(null, false, { message: 'Incorrect Email or Password' })
            }
        }catch(e){
            return done(e)
        }
    }

    const authenticateManagerUser = async (email,password,done) =>{
        console.log(user, "Arrived at user log");
        user =  await managerService.getUser(email);
        console.log(user, "Arrived after log should not be undefined");
        pass = user.map(e => e.password);
        role = user.map(e => e.roleId);
        console.log(role)
        if(user.length == 0){
            return done(null, false, { message: "User Does Not Exist"} )
        }
        try{
            if( await bcrypt.compare(password, pass.toString())){
                return done(null,user)
            }else{
                return done(null, false, { message: 'Incorrect Email or Password' })
            }
        }catch(e){
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'},authenticateUser));
    passport.use(new LocalStrategy({usernameField: 'email'},authenticateManagerUser));
    passport.serializeUser((role,done) =>done(null,role))
    passport.deserializeUser((user,done) =>{
        return done(null,user)
    });
}

module.exports = initialize;