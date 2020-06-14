
import express from 'express';
import * as userService from '../services/user.service';
// import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export const userRouter = express.Router();

const secretKey = 'asuperdupersecretdonttell';

export const authenticateToken = (request, response, next) => {
    const header = request.headers.authorization;

    if(header) {
        const token = header.split(' ')[1];
        jsonwebtoken.verify(token, secretKey, (err, user) => {
            if(err){
                console.log(err);
                response.sendStatus(403);
            }
            request.user = user;
            next();
        })
    } else {
        response.sendStatus(401);
        console.log(response);
    }
}

// userRouter.get('/:id', authenticateToken, (request, response, next) => {
//     const userId: number = +request.params.id;
//     userService.getUserById(userId).then(user => {
//         if(!user) {
//             response.sendStatus(404);
//         } else {
//             response.json(user);
//         }
//         next();
//     }).catch(err => {
//         console.log(err);
//         response.sendStatus(500);
//         next();
//     })
// });

userRouter.post('/register', async (request, response, next) => {
    const saltRounds = 10;
    let password = '';

    await bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(request.body.password, salt, (err, hash) => {
            // Store hash in your password DB.
            request.body.password = hash;
            console.log(password);
            if(err) {
                console.log(err);
                response.sendStatus(500);
            } else {
                const user: any = {
                    userName: request.body.userName,
                    password: request.body.password,
                    firstName: request.body.firstName,
                    lastName: request.body.lastName,
                    email: request.body.email,
                    roleId: request.body.roleId
                }

                userService.registerUser(user).then(users => {
                    response.json(users);
                    console.log(users);
                    next();
                }).catch(err => {
                    console.log(err);
                    response.sendStatus(500);
                });
            }
        });
    });
});

userRouter.post('/login', async (request, response, next) => {
    console.log("logging in");
    // const credentials = request.body;
    // let UserResponse: User;
    const user: any = {
        userName: request.body.userName,
        password: request.body.password,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        roleId: request.body.roleId
    }
    userService.loginUser(user).then(users => {
        bcrypt.compare(request.body.password, users.password).then((match) => {
            if(match) {
                const accessToken = jsonwebtoken.sign(user, secretKey);
                const result = {
                    accessToken: {accessToken},
                    user: users
                }
                response.json(result);
                console.log(result);
                next();
            }
            else{
                response.sendStatus(500);
                console.log(response);
            }
        });
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    })
})
