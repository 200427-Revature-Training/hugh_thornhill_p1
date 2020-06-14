// manager.router
import express from 'express';
import * as managerService from '../services/manager.service';
// import { User } from '../models/User';
import * as authenticate from './user.router';

export const managerRouter = express.Router();

managerRouter.get('/reimbursements/all', authenticate.authenticateToken, (request, response, next) =>{
    console.log('Request received - processing at app.get');
    managerService.getAllReimbursements().then(reimbursements => {
        response.json(reimbursements);
        next();
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
});

managerRouter.get('/status/:reimbStatusId', authenticate.authenticateToken, async (request, response, next) => {
    const reimbStatusId: number = +request.params.reimbStatusId;
    try {
        const reimbursements = await managerService.getAllReimbursementsByStatus(reimbStatusId);
        if(!reimbStatusId) {
            response.sendStatus(404);
        } else {
        response.json(reimbursements);
        }
        next();
    } catch(error) {
        response.sendStatus(500);
        next();
    }
});

managerRouter.get('/reimbursements/:id', authenticate.authenticateToken, async (request, response, next) => {
    const reimbursementId: number = +request.params.id;
    try{
        const reimbursementById = await managerService.getReimbursementById(reimbursementId);
        if(!reimbursementId) {
            response.sendStatus(404);
        } else {
        response.json(reimbursementById);
        }
        next();
    } catch(error) {
        response.sendStatus(500);
        next();
    }
});

// managerRouter.get('/:email', async (request, response, next) => {
//     console.log('Request received - processing at app.get');
//     const email = request.params.email;
//     let manager: User[];
//     try{
//         manager = await managerService.getUser(email);
//         response.json(manager);
//     }catch (err){
//         response.sendStatus(500);
//         console.log(err);
//         return;
//     }
// });

managerRouter.patch('', authenticate.authenticateToken, (request, response, next) => {
    const reimbursement = request.body;
    managerService.patchReimbursement(reimbursement)
        .then(updatedReimbursement => {
            if(updatedReimbursement) {
                response.json(updatedReimbursement);
            }
        }).catch(err => {
            console.log(err);
            response.sendStatus(500);
        }).finally(() => {
            next();
        })
});