// employee.router
import express from 'express';
import * as employeeService from '../services/employee.service';
// import { User } from '../models/User';
import { ReimbursementPost } from '../models/ReimbursementPost';
import * as authenticate from './user.router';

export const employeeRouter = express.Router();

employeeRouter.get('/employee/:reimbAuthorId', authenticate.authenticateToken, async (request, response, next) => {
    console.log('Request received - processing at app.get');
    const reimbAuthorId: number = +request.params.reimbAuthorId;
    console.log(reimbAuthorId);
    try {
        const reimbursements = await employeeService.getAllReimbursements(reimbAuthorId);
        if(!reimbAuthorId) {
            response.sendStatus(404);
        } else {
        response.json(reimbursements);
        console.log(reimbursements);
        }
        next();
    } catch(error) {
        response.sendStatus(500);
        console.log(error);
        next();
    }
});

// employeeRouter.get('/:email', async (request, response, next) => {
//     console.log('Request received - processing at app.get');
//     const email = request.params.email;
//     let employee: User[];
//     try{
//         employee = await employeeService.getUser(email);
//         response.json(employee);
//     }catch (err){
//         response.sendStatus(500);
//         console.log(err);
//         return;
//     }
// });

// DOES NOT WORK
// employeeRouter.get('reimbursement/:id', async (request, response, next) => {
//     const reimbursementId: number = +request.params.id;
//     try{
//         const reimbursementById = await employeeService.getReimbursementById(reimbursementId);
//         if(!reimbursementId) {
//             response.sendStatus(404);
//         } else {
//         response.json(reimbursementById);
//         }
//         next();
//     } catch(error) {
//         response.sendStatus(500);
//         next();
//     }
// });

employeeRouter.post('', authenticate.authenticateToken, async (request, response, next) => {
    console.log('Request received - processing post');
    const reimbursementRequest = request.body;
    let newReimbursement: ReimbursementPost;

    console.log(reimbursementRequest);
    try {
        newReimbursement = await employeeService.saveReimbursement(reimbursementRequest);
        response.status(201);
        response.json(newReimbursement);
        next();
    } catch(error) {
        console.log(error);
        response.sendStatus(500);
        next();
    }
});