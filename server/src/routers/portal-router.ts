import express from 'express';
import { checkAuthenticated } from '../auth/index';

export const portalRouter = express.Router();

portalRouter.get('/', checkAuthenticated, async (request, response) => {
    try{
        console.log(request.user)
        response.render("portal", {name: request.user[0].userName})
    }catch (err){
        response.sendStatus(500);
        console.log(err)
        return;
    }
})